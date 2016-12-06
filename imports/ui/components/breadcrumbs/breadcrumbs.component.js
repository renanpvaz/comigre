import template from './breadcrumbs.html';
import controller from './breadcrumbs.ctrl';

const BreadcrumbsComponent = {
  bindings: {
    crumbs: '<',
    onCrumbClick: '&'
  },
  template,
  controller
};

export default BreadcrumbsComponent;
