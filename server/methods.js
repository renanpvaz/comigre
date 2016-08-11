Meteor.methods({
  getPlaces: function (center, radius) {
    const reqURL = 'https://maps.googleapis.com/maps/api/place/nearbysearch/json';
    var result;

    try {
      result = HTTP.call('GET', reqURL, {
        params: {
          key: 'AIzaSyBMNCRPFu5EiTK3rudC9EqdqD3Fg4cgxBU',
          location: center.latitude + ',' + center.longitude,
          radius: radius / 0.00062137 //convert to meters
        }
      });

      return result.data.results;

    } catch (e) {
      throw e;
    }
  },

  getPlaceDetail: function (placeId) {
    var reqURL = 'https://maps.googleapis.com/maps/api/place/details/json';
    var result;

    try {
      result = HTTP.call('GET', reqURL, {
        params: {
          key: Meteor.settings.apiKey,
          placeid: placeId
        }
      });

      if (result.data.status === 'OK') {
        return result.data.result;
      } else {
        console.log(result.data.status);
      }
    } catch (e) {
      // TODO: handle errors
    }
  }
});
