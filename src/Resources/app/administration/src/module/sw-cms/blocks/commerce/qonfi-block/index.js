import './component';
import './preview';

Shopware.Service('cmsService').registerCmsBlock({
    name: 'qonfi-block',
    category: 'commerce',
    label: 'Qonfi product selector block',
    component: 'sw-cms-block-qonfi-block',
    previewComponent: 'sw-cms-preview-qonfi-block',
    defaultConfig: {
        marginBottom: '20px',
        marginTop: '20px',
        marginLeft: '20px',
        marginRight: '20px',
        sizingMode: 'boxed'
    },
    slots: {
        full: {
            type: 'qonfi'
        }
    }
});