(function() {
  'use strict';

  angular
    .module('app.league')
    .config(Config);

  Config.$inject = ['$httpProvider'];

  //////////////

  function Config($httpProvider) {
    $httpProvider.interceptors.push('NotRegisteredInterceptor');
  }

})();
