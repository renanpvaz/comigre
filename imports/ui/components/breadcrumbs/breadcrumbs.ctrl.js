import assign from 'angular-assign';
import $emit from 'ng-emit';

class BreadcrumbsCtrl {
  constructor($scope, $location, $window) {
    'ngInject';

    assign(arguments).to(this);
  }

  $onInit() {
    this.active = this.crumbs[0];

    this.$scope.$watch('$ctrl.crumbs', () => {
      this.active = this.crumbs[this.crumbs.length - 1];
    });
  }

  activateCrumb(crumb) {
    this.$location.hash(crumb.hash);
    this.active = crumb;

    $emit(this.onCrumbClick, { index: this.crumbs.indexOf(crumb) });
  }
}

export default BreadcrumbsCtrl;
