class JobFormCtrl {
  constructor() {
    'ngInject';
  }

  $onInit() {
    this.job = {};
  }

  isContractTypeSelected(type) {
    return this.job.contractType === type ? 'selected-cookie' : '';
  }

  setContractType(type) {
    this.job.contractType = type;
  }
}

export default JobFormCtrl;
