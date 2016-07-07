(function () {
  'use strict';

  angular
    .module('app.member')
    .controller('MemberViewCtrl', MemberViewCtrl);

  MemberViewCtrl.$inject = ['$window', '$ionicPopup', '$state', '$stateParams', 'memberService', 'routeService'];

  //////////////

  function MemberViewCtrl($window, $ionicPopup, $state, $stateParams, memberService, routeService) {
    var vm = this;

    vm.member = getMember();
    vm.isProfileTab = isProfileTab();
    vm.remove = remove;
    vm.memberEdit = memberEdit;
    vm.logout = logout;

    function getMember() {
      var id = $stateParams.id || 'current';
      return memberService.getMember(id);
    }

    function isProfileTab() {
      return !!$state.current.views.profileTab;
    }

    function remove() {
      var confirm = $ionicPopup.confirm({
        title: "Remove From League",
        template: "Are you sure you want to remove this member from the league?"
      });

      confirm.then(function(res) {
        if (res) {
          memberService.leave()
            .then(function() {
              routeService.go("tab.members");
            });
        }
      });
    }

    function memberEdit(params) {
      routeService.go('tab.memberEdit', params);
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

  }

})();
