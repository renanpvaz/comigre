'use strict';

import { Meteor } from 'meteor/meteor';
import Injectable from '../../../common/injectable';

class LoginCtrl extends Injectable {
  constructor($scope, $reactive, $state, $mdDialog) {
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

  close() {
    this.$mdDialog.hide();
  }

  login() {
    Meteor.loginWithPassword(this.credentials.email, this.credentials.password,
      this.$bindToContext((err) => {
        if (err) {
          console.log(err);
          this.error = err;
        } else {
          console.log('login succeeded');
          this.close();
        }
      })
    );
  }
}

export default LoginCtrl;
