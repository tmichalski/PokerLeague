(function () {
  'use strict';

  angular
    .module('app.event')
    .controller('EventTabsCtrl', EventTabsCtrl);

  EventTabsCtrl.$inject = ['routeService'];

  //////////////

  function EventTabsCtrl(routeService) {
    var vm = this;

    vm.membersTab = membersTab;
    vm.notesTab = notesTab;
    vm.hostTab = hostTab;

    function membersTab() {
      routeService.go('tab.event.members');
    }

    function notesTab() {
      routeService.go('tab.event.notes');
    }

    function hostTab() {
      routeService.go('tab.event.host');
    }
  }

})();
