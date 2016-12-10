import $emit from 'ng-emit';
import assign from 'angular-assign';

class ResidenceFormCtrl {
  constructor($scope) {
    'ngInject';

    assign(arguments).to(this);
  }

  $onInit() {
    this.accommodation = {
      amenities: {
        wifi: false,
        cable: false,
        tv: false
      }
    };

    this.types = [
      { text: 'Casa', value: 0 },
      { text: 'Apartamento', value: 1 },
      { text: 'Outro', value: 2 }
    ];

    this.roomTypes = [
      { text: 'Quarto inteiro', value: 0 },
      { text: 'Quarto compartilhado', value: 1 },
    ];
  }

  handleTypeSelection({ value }) {
    this.accommodation.type = value;
    this.checkValidity();
  }

  handleRoomTypeSelection({ value }) {
    this.accommodation.roomType = value;
    this.checkValidity();
  }

  checkValidity() {
    if (this.form.$valid &&  this.accommodation.type && this.accommodation.roomType) {
      $emit(this.onValid, { accommodation: this.accommodation });
    }
  }
}

export default ResidenceFormCtrl;
