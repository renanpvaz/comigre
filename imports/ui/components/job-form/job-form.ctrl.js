import { JOB } from '../../config';
import $emit from 'ng-emit';

class JobFormCtrl {
  constructor($scope) {
    'ngInject';

    this.$scope = $scope;
  }

  $onInit() {
    this.job = {};

    this.contractTypes = [
      { text: 'Efetivo', value: 0 },
      { text: 'Estágio', value: 1 },
      { text: 'Temporário', value: 2 },
      { text: 'Outro', value: 3 }
    ];

    this.$scope.$watchGroup(['form.$valid', '$ctrl.hasContractType'], (values) => {
      if (values[0] && this.hasContractType) {
        $emit(this.onValid, { [JOB]: this.job });
      }
    });
  }

  handleContractTypeSelection({ value }) {
    this.job.contractType = value;
    this.hasContractType = true;
  }
}

export default JobFormCtrl;
