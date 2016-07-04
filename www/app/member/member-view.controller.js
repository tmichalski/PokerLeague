(function () {
  'use strict';

  angular
    .module('app.member')
    .controller('MemberViewCtrl', MemberViewCtrl);

  MemberViewCtrl.$inject = ['$ionicPopup', '$stateParams', 'memberService', 'routeService'];

  //////////////

  function MemberViewCtrl($ionicPopup, $stateParams, memberService, routeService) {
    var vm = this;

    vm.member = getMember();
    vm.remove = remove;
    vm.memberEdit = memberEdit;

    function getMember() {
      var id = $stateParams.id || 'latest';
      return memberService.getMember(id);
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

  }

})();
