'use strict';

import { Meteor } from 'meteor/meteor';
import { Events } from '../../api/events/collection';
import { Places } from '../../api/places/collection';

import Injectable from '../../common/injectable';

class EventsRegisterCtrl extends Injectable {
  constructor($mdDialog, $state) {
    'ngInject';

    super(...arguments);
  }

  $onInit() {
    this.event = {};
  }

  onSelectPlace(place) {
    const eventId = this.register();

    if (eventId) {
      const placeId = Places.insert({
        message: this.event.name,
        detailsId: eventId,
        lat: place.coords.lat,
        lng: place.coords.lng,
        types: ['event']
      });

      this.showDialog(placeId);
    }
  }

  register() {
    if (this.form.$valid) {
      return Events.insert(this.event);
    }
  }

  showDialog(id) {
    this.$mdDialog.show(
      this.$mdDialog.confirm()
        .clickOutsideToClose(true)
        .title('Evento cadastrado com sucesso')
        .textContent('Escolha o que deseja fazer agora.')
        .ariaLabel('Event Register Dialog')
        .ok('Ver no mapa')
        .cancel('Permanecer na página')
    ).then(() => this.$state.go('places', { id }), () => this.event = {});
  }
}

export default EventsRegisterCtrl;
