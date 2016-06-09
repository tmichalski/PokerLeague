(function () {
  'use strict';

  angular
    .module('app')
    .config(configure);

  configure.$inject = ['$httpProvider'];

  function configure($httpProvider) {
    $httpProvider.interceptors.push('authorizationInterceptor');
    $httpProvider.interceptors.push('unauthorizedInterceptor');
    $httpProvider.interceptors.push('notRegisteredInterceptor');
  }
  
})();
