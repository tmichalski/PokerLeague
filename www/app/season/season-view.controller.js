(function() {
  'use strict';

  angular
    .module('app.season')
    .controller('SeasonViewCtrl', SeasonViewCtrl);

  SeasonViewCtrl.$inject = ['$stateParams', '$location', 'seasonService'];

  //////////////

  function SeasonViewCtrl($stateParams, $location, seasonService) {
    var vm = this;

    vm.showEditButton = showEditButton();
    vm.season = getSeason();

    function showEditButton() {
      return $location.path() != '/home';
    }

    function getSeason() {
      var id = $stateParams.id || 'latest';
      return seasonService.getSeason(id);
    }
  }

})();
