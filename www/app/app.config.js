(function () {
  'use strict';

  angular
    .module('app')
    .config(configure);

  configure.$inject = ['$httpProvider', '$urlRouterProvider'];

  function configure($httpProvider, $urlRouterProvider) {

    // Interceptors
    $httpProvider.interceptors.push('authorizationInterceptor');
    $httpProvider.interceptors.push('unauthorizedInterceptor');
    $httpProvider.interceptors.push('notRegisteredInterceptor');

    // Default Route
    $urlRouterProvider.otherwise('/home')
  }

})();
