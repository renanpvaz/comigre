class mapCtrl {
  constructor() {
    this.name = 'map';

    this.map = {
      center: {
        latitude: -30.0277,
        longitude: -51.2287
      },
      zoom: 8
    };

    Meteor.call('getPlaces', this.map.center, 1,
      (error, result) => {
        console.log(result);
        if (!error) {
          this.places = result.map((place, i) => ({
            id: i,
            location: place.geometry.location
          }));
        }
      });
  }
}

export default mapCtrl;
