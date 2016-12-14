import { JOB } from '../../config';

class JobFormCtrl {
  constructor() {
    'ngInject';
  }

  $onInit() {
    this.job = {  };

    this.contractTypes = [
      { text: 'Efetivo', value: 0 },
      { text: 'Estágio', value: 1 },
      { text: 'Temporário', value: 2 },
      { text: 'Outro', value: 3 }
    ];
  }

  handleContractTypeSelection({ value }) {
    this.job.contractType = value;
  }
}

export default JobFormCtrl;
