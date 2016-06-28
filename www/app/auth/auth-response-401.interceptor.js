(function () {
  'use strict';

  angular
    .module('app.auth')
    .factory('AuthResponse401Interceptor', AuthResponse401Interceptor);

  AuthResponse401Interceptor.$inject = ['$q', '$window'];

  //////////////

  function AuthResponse401Interceptor($q, $window) {
    return {
      responseError: function (response) {
        if (response.status == 401) {
          $window.localStorage.removeItem('authToken');
          $window.location = "#/register";
        }
        return $q.reject(response);
      }
    }
  }

})();
