import template from './sw-cms-el-qonfi.html.twig';
import './sw-cms-el-qonfi.scss';

Shopware.Component.register('sw-cms-el-qonfi', {
    template,

    mixins: [
        'cms-element'
    ],

    created() {
        this.createdComponent();
    },

    methods: {
        createdComponent() {
            this.initElementConfig('qonfi');
        }
    }
});