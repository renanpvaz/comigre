import $emit from 'ng-emit';

class CookieSelectCtrl {
  constructor() {
    'ngInject';
  }

  $onInit() {
    this.selected = null;
  }

  isSelected(value) {
    return value === this.selected;
  }

  setSelected(value) {
    $emit(this.onSelect, { value });

    this.selected = value;
  }
}

export default CookieSelectCtrl;
