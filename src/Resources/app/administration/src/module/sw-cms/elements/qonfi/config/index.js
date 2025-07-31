// <plugin root>/src/Resources/app/administration/src/module/sw-cms/elements/qonfi/config/index.js
import template from './sw-cms-el-config-qonfi.html.twig';

Shopware.Component.register('sw-cms-el-config-qonfi', {
    template,

    mixins: [
        'cms-element'
    ],

    data() {
        return {
            displayTypeOptions: [
                { value: "popup", label: "Pop-up" },
                { value: "inline", label: "Inline" },
                { value: "sidebar", label: "Sidebar" }
            ],
            productCheckOptions: [
                { value: true, label: "Enabled" },
                { value: false, label: "Disabled" },
            ]
        };
    },
    
    computed: {
        qonfiId: {
            get() {
                return this.element.config.qonfiId.value;
            },

            set(value) {
                this.element.config.qonfiId.value = value;
            }
        },
        qonfiProductCheck: {
            get() {
                return this.element.config.qonfiProductCheck.value;
            },
            set(value) {
                this.element.config.qonfiProductCheck.value = value;
            }
        },
        
        qonfiDisplayType: {
            get() {
                return this.element.config.qonfiDisplayType.value;
            },

            set(value) {
                this.element.config.qonfiDisplayType.value = value;
            }
        },
        qonfiTitle: {
            get() {
                return this.element.config.qonfiTitle.value;
            },

            set(value) {
                this.element.config.qonfiTitle.value = value;
            }
        },
        qonfiText: {
            get() {
                return this.element.config.qonfiText.value;
            },

            set(value) {
                this.element.config.qonfiText.value = value;
            }
        },
        qonfiBTNText: {
            get() {
                return this.element.config.qonfiBTNText.value;
            },

            set(value) {
                this.element.config.qonfiBTNText.value = value;
            }
        },
        qonfiTextColor: {
            get() {
                return this.element.config.qonfiTextColor.value;
            },

            set(value) {
                this.element.config.qonfiTextColor.value = value;
            }
        },
        qonfiBackgroundColor: {
            get() {
                return this.element.config.qonfiBackgroundColor.value;
            },

            set(value) {
                this.element.config.qonfiBackgroundColor.value = value;
            }
        },
        qonfiBTNTextColor: {
            get() {
                return this.element.config.qonfiBTNTextColor.value;
            },

            set(value) {
                this.element.config.qonfiBTNTextColor.value = value;
            }
        },
        qonfiBTNBackgroundColor: {
            get() {
                return this.element.config.qonfiBTNBackgroundColor.value;
            },

            set(value) {
                this.element.config.qonfiBTNBackgroundColor.value = value;
            }
        },
    },

    created() {
        this.createdComponent();
    },

    methods: {
        createdComponent() {
            this.initElementConfig('qonfi');
        },

        onElementUpdate() {
            this.$emit('element-update', this.element);
        }
    }
});