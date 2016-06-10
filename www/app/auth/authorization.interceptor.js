(function() {
  'use strict';

  angular
    .module('app.auth')
    .factory('AuthorizationInterceptor', AuthorizationInterceptor);

  AuthorizationInterceptor.$inject = ['$window'];

  //////////////

  function AuthorizationInterceptor($window) {
    return {
      request: function(request) {
        request.headers['Authorization'] = $window.localStorage.authToken;
        return request;
      }
    }
  }

})();
