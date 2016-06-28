(function() {
  'use strict';

  angular
    .module('app.season')
    .controller('SeasonViewCtrl', SeasonViewCtrl);

  SeasonViewCtrl.$inject = ['$stateParams', '$location', 'seasonService', 'routeService'];

  //////////////

  function SeasonViewCtrl($stateParams, $location, seasonService, routeService) {
    var vm = this;

    vm.showEditButton = showEditButton();
    vm.season = getSeason();
    vm.viewEvent = viewEvent;
    vm.addEvent = addEvent;
    vm.seasonEdit = seasonEdit;

    function showEditButton() {
      return $location.path() != '/home';
    }

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
