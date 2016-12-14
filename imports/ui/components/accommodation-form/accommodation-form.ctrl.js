import $emit from 'ng-emit';
import assign from 'angular-assign';

import { ACCOMMODATION } from '../../config';

class AccommodationFormCtrl {
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

    this.$scope.$watch(() => this.form.$valid, this.checkValidity);
  }

  handleTypeSelection({ value }) {
    this.typeHasValue = true;
    this.accommodation.type = value;
    this.checkValidity();
  }

  handleRoomTypeSelection({ value }) {
    this.roomTypeHasValue = true;
    this.accommodation.roomType = value;
    this.checkValidity();
  }

  checkValidity() {
    if (this.form.$valid && this.typeHasValue && this.roomTypeHasValue) {
      $emit(this.onValid, { [ACCOMMODATION]: this.accommodation });
    }
  }
}

export default AccommodationFormCtrl;
