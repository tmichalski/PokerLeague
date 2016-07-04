(function () {
  'use strict';

  angular
    .module('app.member')
    .factory('memberService', MemberService);

  MemberService.$inject = ['Member', 'historyService'];

  function MemberService(Member, historyService) {

    return {
      getMember: getMember
    };

    ////////////

    function getMember(id) {
      var member = Member.get({id: id});
      historyService.removeBackFor(["tab.memberEdit", "tab.memberAdd"]);
      return member;
    }
  }

})();
