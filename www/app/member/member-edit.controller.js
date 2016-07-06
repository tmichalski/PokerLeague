(function () {
  'use strict';

  angular
    .module('app.member')
    .controller('MemberEditCtrl', MemberEditCtrl);

  MemberEditCtrl.$inject = ['$stateParams', '$ionicPopup', 'Member', 'routeService', 'historyService'];

  //////////////

  function MemberEditCtrl($stateParams, $ionicPopup, Member, routeService, historyService) {
    var vm = this;

    vm.member = getMember();
    vm.saveMember = saveMember;
    vm.deleteMember = deleteMember;

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
  }

})();
