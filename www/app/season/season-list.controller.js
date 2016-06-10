(function() {
  'use strict';

  angular
    .module('app.seasons')
    .controller('SeasonListCtrl', SeasonListCtrl);

  SeasonListCtrl.$inject = ['Season'];

  //////////////

  function SeasonListCtrl(Season) {
    var vm = this;
    vm.seasons = Season.query();
  }

})();
