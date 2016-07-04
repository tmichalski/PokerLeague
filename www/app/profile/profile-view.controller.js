(function () {
  'use strict';

  angular
    .module('app.profile')
    .controller('ProfileViewCtrl', ProfileViewCtrl);

  ProfileViewCtrl.$inject = ['$window', '$ionicPopup', 'Profile', 'registerService', 'routeService'];

  //////////////

  function ProfileViewCtrl($window, $ionicPopup, Profile, registerService, routeService) {
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
          $window.localStorage.removeItem('authToken');
          routeService.go("register");
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
          registerService.leave()
            .then(function() {
              routeService.go("register");
            });
        }
      });
    }
  }

})();
