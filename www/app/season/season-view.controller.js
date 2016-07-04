(function() {
  'use strict';

  angular
    .module('app.season')
    .controller('SeasonViewCtrl', SeasonViewCtrl);

  SeasonViewCtrl.$inject = ['$stateParams', 'seasonService', 'routeService'];

  //////////////

  function SeasonViewCtrl($stateParams, seasonService, routeService) {
    var vm = this;

    vm.season = getSeason();
    vm.viewEvent = viewEvent;
    vm.addEvent = addEvent;
    vm.seasonEdit = seasonEdit;

    function getSeason() {
      var id = $stateParams.id || 'latest';
      return seasonService.getSeason(id);
    }

    function addEvent(params) {
      routeService.go('tab.eventAdd', params);
    }

    function viewEvent(params) {
      routeService.go('tab.event', params);
    }

    function seasonEdit(params) {
      routeService.go('tab.seasonEdit', params);
    }
  }

})();
