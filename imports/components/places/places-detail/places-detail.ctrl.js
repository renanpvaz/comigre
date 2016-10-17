import assign from 'angular-assign';

import { Places } from '../../../api/places/collection.js';

class PlacesDetailCtrl {
  constructor($mdDialog, $interval, $mdMedia) {
    'ngInject';

    assign(arguments).to(this);
  }

  $onInit() {
    this.progress = 0;
  }

  $onChanges() {
    const place = Places.findOne({ _id: this.id });

    this.$interval(() => this.progress += 10, 100);

    Meteor.call('getPlaceDetail', place.googleId,
      (error, details) => {
        this.progress = 100;
        this.details = details;

        if (details.website) {
          this.details.formattedWebsite = details.website.substr(7);
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
