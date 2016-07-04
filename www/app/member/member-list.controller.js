(function () {
  'use strict';

  angular
    .module('app.member')
    .controller('MemberListCtrl', MemberListCtrl);

  MemberListCtrl.$inject = ['Member'];

  //////////////

  function MemberListCtrl(Member) {
    var vm = this;
    vm.members = Member.query();
  }

})();
