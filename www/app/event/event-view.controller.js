(function () {
  'use strict';

  angular
    .module('app.event')
    .controller('EventViewCtrl', EventViewCtrl);

  EventViewCtrl.$inject = ['$state', '$window', 'Profile', 'leagueService'];

  //////////////

  function EventViewCtrl($state, $window, Profile, leagueService) {
    var vm = this;

    vm.profile = profile();
    vm.logout = logout;
    vm.leaveLeague = leaveLeague;

    function profile() {
      return Profile.get({id: 'current'});
    }

    function logout() {
      var msg = "Are you sure you want to log out of Poker League?";
      if ($window.confirm(msg)) {
        $window.localStorage.authToken = null;
        $state.go("login");
      }
    }

    function leaveLeague() {
      var msg = "Are you sure you want to leave the league?";
      if ($window.confirm(msg)) {
        leagueService.leaveLeague()
          .then(function() {
              $state.go("leagueRegister");
          });
      }
    }
  }

})();
