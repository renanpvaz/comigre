import assign from 'angular-assign';
import { Meteor } from 'meteor/meteor';

class LoginCtrl {
  constructor($scope, $reactive, $state) {
    'ngInject';

    assign(arguments).to(this);
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
          console.log(err);
          this.error = err;
        } else {
          this.$state.go('place-register');
        }
      })
    );
  }
}

export default LoginCtrl;
