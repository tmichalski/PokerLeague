(function () {
  'use strict';

  angular
    .module('app.auth')
    .factory('UnauthorizedInterceptor', UnauthorizedInterceptor);

  UnauthorizedInterceptor.$inject = ['$q', '$window'];

  //////////////

  function UnauthorizedInterceptor($q, $window) {
    return {
      responseError: function (response) {
        if (response.status == 401) {
          $window.location = "#/login";
        }
        return $q.reject(response);
      }
    }
  }

})();
