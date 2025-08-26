# Qonfi Shopware Extension

## Overview

The Qonfi Shopware Extension is a custom plugin designed to enhance the functionality of your Shopware store. This extension provides additional features and integrations to improve the shopping experience for your customers.

## Features

- Creates an add-to-cart url
- Provides a custom block, so you can integrate Qonfi easily in your website
- The Qonfi block is customizable to your likings

## Installation
1. Navigate to the Shopware root directory and install Qonfi using composer:
    ```bash
    composer require qonfi/shopware
    ```
2. Activate the Qonfi plugin:
    ```bash
    bin/console plugin:install --activate Qonfi
    ```
3. Rebuild your site:
    ```bash
    bin/build-storefront.sh
    ```
4. Clear the cache:
    ```bash
    bin/console cache:clear
    ```

## License
This project is licensed under the [MIT License](LICENSE).

## Support
For issues or questions, please open an issue in the repository or contact info@getqonfi.com