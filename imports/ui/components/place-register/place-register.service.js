import angular from 'angular';

class PlaceRegisterService {
  constructor($http) {
    'ngInject';

    this.$http = $http;
    this.baseUrl = 'https://maps.googleapis.com/maps/api/geocode/json';
  }

  geocode({ street, number, state }) {
    const route = street.split(' ').join('+');
    const params = {
      address: `${number}+${route}+${state}`,
      key: Meteor.settings.public.googlePlacesAPIKey,
      language: 'pt-BR'
    };

    return this.$http({
        url: this.baseUrl,
        method: 'GET',
        params
      })
      .then(response => {
        if (response.data.status === 'OK') {
          return response.data.results[0].geometry.location;
        }
      });
  }

  inverseGeocode({ lat, lng }) {
    const params = {
      latlng: `${lat},${lng}`,
      language: 'pt-BR'
    };

    return this.$http({
        url: this.baseUrl,
        method: 'GET',
        params
      })
      .then(response => {
        if (response.data.status === 'OK') {
          this.address = response.data.results[0].address_components; // jshint ignore:line
          console.log(this.address);

          return {
            street: this.getComponent('route'),
            number: parseInt(this.getComponent('street_number').split('-')[0]),
            neighborhood: this.getComponent('sublocality'),
            city: this.getComponent('locality'),
            state: this.getComponent('administrative_area_level_1'),
            cep: this.getComponent('postal_code').replace('-', '')
          };
        }
      });
  }

  getComponent(name) {
    const component = this.address.find(c => c.types.includes(name));

    if (component) {
      return component.short_name; // jshint ignore:line
    }

    return '';
  }
}

export default PlaceRegisterService;
