(function () {
  'use strict';

  angular
    .module('app.profile')
    .controller('ProfileViewCtrl', ProfileViewCtrl);

  ProfileViewCtrl.$inject = ['$state', '$window', '$ionicPopup', 'Profile', 'leagueService'];

  //////////////

  function ProfileViewCtrl($state, $window, $ionicPopup, Profile, leagueService) {
    var vm = this;

    vm.profile = profile();
    vm.logout = logout;
    vm.leaveLeague = leaveLeague;

    function profile() {
      return Profile.get({id: 'current'});
    }

    function logout() {
      var confirm = $ionicPopup.confirm({
        title: "Leave League",
        template: "Are you sure you want to log out of Poker League?"
      });

      confirm.then(function(res) {
        if (res) {
          $window.localStorage.authToken = null;
          $state.go("login");
        }
      });
    }

    function leaveLeague() {
      var confirm = $ionicPopup.confirm({
        title: "Leave League",
        template: "Are you sure you want to leave the league?"
      });

      confirm.then(function(res) {
        if (res) {
          leagueService.leaveLeague()
            .then(function() {
              $state.go("leagueRegister");
            });
        }
      });
    }
  }

})();
