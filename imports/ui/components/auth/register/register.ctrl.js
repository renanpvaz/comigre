import { Accounts } from 'meteor/accounts-base';

class RegisterCtrl {
  constructor($scope, $reactive, $state) {
    'ngInject';

    $reactive(this).attach($scope);
    this.$state = $state;
  }

  $onInit() {
    this.user = {};
  }

  goBack() {
    this.$state.go('place-register');
  }

  register() {
    Accounts.createUser(this.user,
      this.$bindToContext((err) => {
        if (err) {
          console.log(err);
        } else {
          this.goBack();
        }
      })
    );
  }
}

export default RegisterCtrl;
