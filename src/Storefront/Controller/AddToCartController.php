<?php declare(strict_types=1);

namespace Qonfi\Storefront\Controller;

use Shopware\Core\Checkout\Cart\LineItem\LineItem;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Shopware\Core\System\SalesChannel\SalesChannelContext;
use Shopware\Core\Checkout\Cart\SalesChannel\CartService;
use Shopware\Core\Framework\DataAbstractionLayer\EntityRepository;
use Shopware\Core\Framework\DataAbstractionLayer\Search\Criteria;
use Shopware\Core\Framework\DataAbstractionLayer\Search\Filter\EqualsFilter;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Request;
use Shopware\Core\Content\Product\ProductEntity;
use Psr\Log\LoggerInterface;

#[Route(defaults: ['_routeScope' => ['storefront']])]
class AddToCartController extends AbstractController
{
    private EntityRepository $productRepository;
    private CartService $cartService;
    private LoggerInterface $logger;

    public function __construct(EntityRepository $productRepository, CartService $cartService, LoggerInterface $logger)
    {
        $this->productRepository = $productRepository;
        $this->cartService = $cartService;
        $this->logger = $logger;
    }

    #[Route(
        path: '/add-to-cart/{productNumber}',
        name: 'frontend.add_to_cart',
        methods: ['GET'],
        defaults: ['_csrf_protected' => false]
    )]
    public function addToCart(
        string $productNumber,
        Request $request,
        SalesChannelContext $context
    ): ?Response {
        $quantity = $request->query->get('quantity', 1);
        $isAjax = $request->query->get('ajax', 0);

        // Sanitizing the quantity input to ensure it's a valid integer
        $quantity = filter_var($quantity, FILTER_SANITIZE_NUMBER_INT);
        $quantity = (int) $quantity;
        if ($quantity < 1) {
            $quantity = 1;
        }

        // Set up the criteria to search for the product by its number
        $criteria = new Criteria();
        $criteria->addFilter(new EqualsFilter('productNumber', $productNumber));

        // Get the product from repository
        $result = $this->productRepository->search($criteria, $context->getContext());
        $product = $result->first();

        // Check if the product was found
        if (!$product instanceof ProductEntity) {
            $this->logger->error('Product not found: ' . $productNumber);
            $this->addFlash('danger', 'product could not be added.');
            if(!$isAjax) {
                return $this->redirectToRoute('frontend.checkout.cart.page');
            } 
            else {
                return new Response('', 302);
            }
        }
        
        // Check if the product has variants
        if ($product->getChildCount() > 0) {
            $this->logger->error('Variable product was not implicit enough: ' . $productNumber);
            $this->addFlash('danger', 'product could not be added.');
            if(!$isAjax) {
                return $this->redirectToRoute('frontend.checkout.cart.page');
            } 
            else {
                return new Response('', 302);
            }
        }

        // Retrieve the current cart
        $cart = $this->cartService->getCart($context->getToken(), $context);
    
        // Create a new LineItem for the cart
        $lineItem = new LineItem(
            $product->getId(),
            LineItem::PRODUCT_LINE_ITEM_TYPE,
            $product->getId(),
            $quantity
        );
                
         // Make it stackable and removable
        $lineItem->setStackable(true);
        $lineItem->setRemovable(true);

        // Set the new cart
        $this->cartService->add(
            $cart,
            $lineItem,
            $context
        );

        if(!$isAjax) {
            return $this->redirectToRoute('frontend.checkout.cart.page');
        } 
        else {
            return new Response('', 302);
        }
    }
}
