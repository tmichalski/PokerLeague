(function () {
  'use strict';

  angular
    .module('app.profile')
    .controller('ProfileViewCtrl', ProfileViewCtrl);

  ProfileViewCtrl.$inject = ['$state', '$window', 'Profile'];

  //////////////

  function ProfileViewCtrl($state, $window, Profile) {
    var vm = this;

    vm.profile = profile();
    vm.logout = logout;

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
  }

})();
