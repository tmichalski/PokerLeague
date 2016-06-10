(function() {
  'use strict';

  angular
    .module('app.seasons')
    .controller('SeasonViewCtrl', SeasonViewCtrl);

  SeasonViewCtrl.$inject = ['$stateParams', 'seasonService'];

  //////////////

  function SeasonViewCtrl($stateParams, seasonService) {
    var vm = this;

    vm.season = getSeason();

    function getSeason() {
      var id = $stateParams.id || 'latest';
      return seasonService.getSeason(id);
    }
  }

})();
