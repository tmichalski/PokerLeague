(function() {
  'use strict';

  angular
    .module('app.auth')
    .config(Config);

  Config.$inject = ['$httpProvider'];

  //////////////

  function Config($httpProvider) {
    $httpProvider.interceptors.push('AuthorizationInterceptor');
    $httpProvider.interceptors.push('UnauthorizedInterceptor');
  }

})();
