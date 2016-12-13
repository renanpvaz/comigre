import template from './breadcrumbs.html';
import controller from './breadcrumbs.ctrl';

const BreadcrumbsComponent = {
  bindings: {
    crumbs: '<',
    active: '<'
  },
  template,
  controller
};

export default BreadcrumbsComponent;
