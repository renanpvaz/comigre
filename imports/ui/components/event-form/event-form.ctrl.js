import assign from 'angular-assign';

class EventFormCtrl {
  constructor($scope) {
    'ngInject';

    assign(arguments).to(this);
  }

  $onInit() {
    this.event = {};

    this.$scope.$watch('form.$valid', (valid) => {
      if (valid && Object.keys(this.event).length) {
        console.log('valid!');
        this.onValid({
          $event: { event: this.event }
        });
      }
    });
  }
}

export default EventFormCtrl;
