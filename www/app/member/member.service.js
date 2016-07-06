(function () {
  'use strict';

  angular
    .module('app.member')
    .factory('memberService', MemberService);

  MemberService.$inject = ['Member'];

  function MemberService(Member) {

    return {
      getMember: getMember
    };

    ////////////

    function getMember(id) {
      return Member.get({id: id});
    }
  }

})();
