'use strict';

import { Meteor } from 'meteor/meteor';
import Injectable from '../../common/injectable';

class LoginCtrl extends Injectable {
  constructor($scope, $reactive, $state) {
    'ngInject';

    super(...arguments);
  }

  $onInit() {
    this.$reactive(this).attach(this.$scope);

    this.credentials = {
      email: '',
      password: ''
    };

    this.error = '';
  }

  login() {
    Meteor.loginWithPassword(this.credentials.email, this.credentials.password,
      this.$bindToContext((err) => {
        if (err) {
          this.error = err;
        } else {
          this.$state.go('places');
        }
      })
    );
  }
}

export default LoginCtrl;
