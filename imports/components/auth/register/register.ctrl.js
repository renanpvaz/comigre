'use strict';

import { Accounts } from 'meteor/accounts-base';

class RegisterCtrl {
  constructor($scope, $reactive, $state) {
    'ngInject';

    $reactive(this).attach($scope);
    this.$state = $state;
  }

  $onInit() {
    this.user = {
      password: '',
      passwordRetype: ''
    };
  }

  getPattern() {
    return `\\b${this.user.password}\\b`;
  }

  register() {
    Accounts.createUser(this.user,
      this.$bindToContext((err) => {
        if (err) {
          console.log(err);
        } else {
          this.$state.go('places');
        }
      })
    );
  }
}

export default RegisterCtrl;
