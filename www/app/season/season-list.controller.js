(function() {
  'use strict';

  angular
    .module('app')
    .controller('SeasonListCtrl', SeasonListCtrl);

  SeasonListCtrl.$inject = ['Season'];

  function SeasonListCtrl(Season) {
    var vm = this;
    vm.seasons = Season.query();
  }

})();
