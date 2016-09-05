'use strict';

import { Places } from '../../api/places/places.js';
import Injectable from '../../common/injectable';

class PlacesDetailCtrl extends Injectable {
  constructor($mdDialog, $interval) {
    'ngInject';

    super(...arguments);
  }

  $onInit() {
    this.progress = 0;
  }

  $onChanges() {
    const place = Places.findOne({ _id: this.id });

    this.$interval(() => this.progress += 10, 100);

    Meteor.call('getPlaceDetail', place.googleId,
      (error, details) => {
        console.log(details);

        this.progress = 100;
        this.details = details;

        if (details.website) {
          this.details.formattedWebsite = details.website.split('/')[2];
        }
      });
  }

  isLoading() {
    return this.progress < 100;
  }

  close() {
    this.$mdDialog.hide();
  }
}

export default PlacesDetailCtrl;
