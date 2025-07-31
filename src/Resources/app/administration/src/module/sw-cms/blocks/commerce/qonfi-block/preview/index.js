
import template from './sw-cms-preview-qonfi-block.html.twig';
import './sw-cms-preview-qonfi-block.scss';

Shopware.Component.register('sw-cms-preview-qonfi-block', {
    template,
    
    computed: {
        assetFilter() {
            return Shopware.Filter.getByName('asset');
        },
    }
});
