(function () {
  'use strict';

  angular
    .module('app.member')
    .controller('MemberEditCtrl', MemberEditCtrl);

  MemberEditCtrl.$inject = ['$state', '$stateParams', '$ionicPopup', 'Member', 'routeService', 'historyService', 'registerService'];

  //////////////

  function MemberEditCtrl($state, $stateParams, $ionicPopup, Member, routeService, historyService, registerService) {
    var vm = this;

    vm.member = getMember();
    vm.isProfileTab = isProfileTab();
    vm.saveMember = saveMember;
    vm.deleteMember = deleteMember;
    vm.leaveLeague = leaveLeague;

    function getMember() {
      var member;

      if ($stateParams.id) {
        member = Member.get({id: $stateParams.id});
      } else {
        member = new Member();
        member.isActive = true;
        member.isAdmin = false;
      }

      return member;
    }

    function isProfileTab() {
      return !!$state.current.views.profileTab;
    }

    function saveMember() {
      vm.member.$save()
        .then(function () {
          routeService.go("tab.memberView", {id: vm.member.id});
        });
    }

    function deleteMember() {
      var confirm = $ionicPopup.confirm({
        title: "Delete Member",
        template: "Are you sure you want to delete " + vm.member.name + "?<br /><br />"
        + "WARNING! Deleting this league member will also delete all event activity and information tied to the member."
      });

      confirm.then(function(res) {
        if (res) {
          vm.member.$delete()
            .then(function () {
              historyService.nextViewIsRoot();
              routeService.go("tab.members");
            });
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
