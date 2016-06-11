(function () {
  'use strict';

  angular
    .module('app.profile')
    .controller('ProfileViewCtrl', ProfileViewCtrl);

  ProfileViewCtrl.$inject = ['$state', '$window'];

  //////////////

  function ProfileViewCtrl($state, $window) {
    var vm = this;

    vm.logout = logout;

    function logout() {
      var msg = "Are you sure you want to log out of Poker League?";
      if ($window.confirm(msg)) {
        $window.localStorage.authToken = null;
        $state.go("login");
      }
    }
  }

})();
