import assign from 'angular-assign';

class PlaceRegisterCtrl {
  constructor($state, $rootScope, $location) {
    'ngInject';

    assign(arguments).to(this);
  }

  $onInit() {
    this.place = {};
    this.step = 0;
    this.breadcrumbs = '';
    this.steps = [
      { hash: 'mapa', breadcrumb: 'Seleção de local' },
      { hash: 'tipo', breadcrumb: 'Seleção do tipo' },
      { hash: 'informacoes', breadcrumb: 'Informações' }
    ];
  }
  
  handleConfirmStep($event) {
    this.step++;
    this.$location.hash(this.steps[this.step].hash);
    Object.assign(this.place, $event);

    this.breadcrumbs = this.steps
      .map(step => step.breadcrumb)
      .slice(0, this.step)
      .join(' > ');

    console.log(this.place);
  }

  handleBackStep($event) {
    this.step--;
    Object.assign(this.place, $event);
  }
}

export default PlaceRegisterCtrl;
