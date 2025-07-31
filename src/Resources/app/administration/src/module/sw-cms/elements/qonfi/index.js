import './component';
import './config';
import './preview';

Shopware.Service('cmsService').registerCmsElement({
    name: 'qonfi',
    label: 'Qonfi product finder',
    component: 'sw-cms-el-qonfi',
    configComponent: 'sw-cms-el-config-qonfi',
    previewComponent: 'sw-cms-el-preview-qonfi',
    defaultConfig: {
        qonfiId: {
            source: 'static',
            value: ''
        },
        qonfiProductCheck: {
            source: 'static',
            value: true
        },
        qonfiDisplayType: {
            source: 'static',
            value: 'popup'
        },
        qonfiTitle: {
            source: 'static',
            value: 'Not sure which product to select?'
        },
        qonfiText: {
            source: 'static',
            value: 'Use our product finder to find the product that matches your needs.'
        },
        qonfiTextColor: {
            source: 'static',
            value: '#000000'
        },
        qonfiBackgroundColor: {
            source: 'static',
            value: '#ffffff'
        },
        qonfiBTNBackgroundColor: {
            source: 'static',
            value: '#7793ae'
        },
        qonfiBTNText: {
            source: 'static',
            value: 'Open the product finder'
        },
        qonfiBTNTextColor: {
            source: 'static',
            value: '#ffffff'
        }
    }
});