Meteor.methods({
  getPlaces: function (center, radius) {
    const reqURL = 'https://maps.googleapis.com/maps/api/place/nearbysearch/json';
    let result;

    result = HTTP.call('GET', reqURL, {
      params: {
        key: Meteor.settings.public.googlePlacesAPIKey,
        location: center.latitude + ',' + center.longitude,
        radius: radius / 0.00062137, //convert to meters,
        types: 'local_government_office|city_hall'
      }
    });

    return result.data.results;
  }
});
