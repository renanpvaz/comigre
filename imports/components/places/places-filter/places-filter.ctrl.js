'use strict';

class PlacesFilterCtrl {
  constructor() {
    'ngInject';
  }

  $onInit() {
    this.isOpen = false;

    this.filters = [{
        name:'Instituições',
        icon: 'account_balance',
        types: ['local_government_office', 'city_hall']
      }, {
        name:'Saúde',
        icon: 'local_hospital',
        types: ['health', 'pharmacy', 'hospital', 'doctor']
      }, {
        name:'Evento',
        icon: 'event',
        types: ['event']
      }];

    this.select(this.filters[0]);
  }

  select(filter) {
    this.selected = filter;
    this.onSelect({ filter });
  }
}

export default PlacesFilterCtrl;
