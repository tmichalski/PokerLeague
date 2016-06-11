(function() {
  'use strict';

  angular
    .module('app.auth')
    .factory('AuthRequestInterceptor', AuthRequestInterceptor);

  AuthRequestInterceptor.$inject = ['$window'];

  //////////////

  function AuthRequestInterceptor($window) {
    return {
      request: function(request) {
        request.headers['Authorization'] = $window.localStorage.authToken;
        return request;
      }
    }
  }

})();
