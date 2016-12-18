import { Meteor } from 'meteor/meteor';

class PlaceRegisterConfirmCtrl {
  constructor() {
    'ngInject';
  }

  $onChanges() {
    if (this.place.coordinates) {
      this.mapImageParams = this.getMapURL();
    }
  }

  getMapURL() {
    const { lng, lat } = this.place.coordinates;
    const accessToken = Meteor.settings.public.mapboxAccessToken;

    return `${lng},${lat},18,0,0/1280x800?access_token=${accessToken}`;
  }
}

export default PlaceRegisterConfirmCtrl;
