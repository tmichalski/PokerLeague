(function () {
  'use strict';

  angular
    .module('app.league')
    .factory('NotRegisteredInterceptor', NotRegisteredInterceptor);

  NotRegisteredInterceptor.$inject = ['$q', '$window'];

  //////////////

  function NotRegisteredInterceptor($q, $window) {
    return {
      responseError: function (response) {
        if (response.status == 412) {
          $window.location = "#/league/register";
        }
        return $q.reject(response);
      }
    }
  }

})();
