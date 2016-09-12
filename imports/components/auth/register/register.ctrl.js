'use strict';

import { Accounts } from 'meteor/accounts-base';

class RegisterCtrl {
  constructor($mdDialog, $scope, $reactive) {
    'ngInject';

    $reactive(this).attach($scope);
    this.$mdDialog = $mdDialog;
  }

  $onInit() {
    this.credentials = {
      email: '',
      password: '',
      passwordRetype: ''
    };

    this.error = '';
  }

  register() {
    Accounts.createUser(this.credentials,
      this.$bindToContext((err) => {
        if (err) {
          this.error = err;
        } else {
          console.log('register succeeded');
        }
      })
    );
  }

  close() {
    this.$mdDialog.hide();
  }
}

export default RegisterCtrl;
