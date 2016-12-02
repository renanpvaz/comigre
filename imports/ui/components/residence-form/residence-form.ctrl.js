class ResidenceFormCtrl {
  constructor() {
    'ngInject';
  }

  $onInit() {
    this.residence = {};
  }

  isResidenceTypeSelected(type) {
    return this.residence.residenceType === type ? 'selected-cookie' : '';
  }

  setResidenceType(type) {
    this.residence.residenceType = type;
  }

  isBedroomTypeSelected(type) {
    return this.residence.bedroomType === type ? 'selected-cookie' : '';
  }

  setBedroomType(type) {
    this.residence.bedroomType = type;
  }

  isResidenceAmenitiesSelected(type) {
    return this.residence.amenities === type ? 'selected-cookie' : '';
  }

  setResidenceAmenities(type) {
    this.residence.amenities = type;
  }
}

export default ResidenceFormCtrl;
