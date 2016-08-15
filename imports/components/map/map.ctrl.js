class mapCtrl {
  constructor(uiGmapIsReady) {
    'ngInject';

    this.places = [];
    this.control = {};

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.map = {
          center: {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude
          },
          zoom: 15
        };
      });
    }

    uiGmapIsReady.promise().then(() => {
      Meteor.call('getPlaces', this.map.center, 100,
      (error, result) => {

        if (!error) {
          const newPlaces = result.map((place, i) => ({
            id: i,
            location: {
              latitude: place.geometry.location.lat,
              longitude: place.geometry.location.lng
            }
          }));

          this.control.newModels(newPlaces);
        }
      });
    });
  }
}

export default mapCtrl;
