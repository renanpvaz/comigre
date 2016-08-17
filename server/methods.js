Meteor.methods({
  getPlaces: function (center, radius) {
    let result;
    const reqURL = 'https://maps.googleapis.com/maps/api/place/nearbysearch/json';
    const params = {
      key: Meteor.settings.public.googlePlacesAPIKey,
      location: `${center.lat},${center.lng}`,
      radius: radius / 0.00062137, //convert to meters,
      types: 'local_government_office|city_hall'
    };

    result = HTTP.call('GET', reqURL, { params });

    return result.data.results;
  }
});
