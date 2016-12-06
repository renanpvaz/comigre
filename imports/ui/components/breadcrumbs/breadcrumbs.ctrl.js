import assign from 'angular-assign';

class BreadcrumbsCtrl {
  constructor($scope, $location) {
    'ngInject';

    assign(arguments).to(this);
  }

  $onInit() {
    this.active = this.crumbs[0];

    this.$scope.$watch('$ctrl.crumbs', () => {
      console.log(this.crumbs);
      this.active = this.crumbs[this.crumbs.length - 1];
    });
  }

  activateCrumb(crumb) {
    this.$location.hash(crumb.hash);
    this.active = crumb;

    this.onCrumbClick({
      $event: {
        index: this.crumbs.indexOf(crumb)
      }
    });
  }
}

export default BreadcrumbsCtrl;
