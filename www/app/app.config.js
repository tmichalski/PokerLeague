(function () {
  'use strict';

  angular
    .module('app')
    .config(configure);

  configure.$inject = ['$httpProvider', '$urlRouterProvider'];

  function configure($httpProvider, $urlRouterProvider) {

    // Interceptors
    $httpProvider.interceptors.push('notRegisteredInterceptor');

    // Default Route
    $urlRouterProvider.otherwise('/home')
  }

})();
