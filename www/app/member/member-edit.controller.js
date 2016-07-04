(function () {
  'use strict';

  angular
    .module('app.member')
    .controller('MemberEditCtrl', MemberEditCtrl);

  MemberEditCtrl.$inject = ['$stateParams', 'Member', 'routeService'];

  //////////////

  function MemberEditCtrl($stateParams, Member, routeService) {
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
      var msg = "Are you sure you want to delete " + vm.member.name + "?\n\n"
        + "WARNING! Deleting this league member will also delete all event activity and information tied to the member. ";

      if (window.confirm(msg)) {
        vm.member.$delete()
          .then(function () {
            routeService.go("tab.memberView", {id: vm.member.id});
          });
      }
    }
  }

})();
