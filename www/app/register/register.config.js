(function() {
  'use strict';

  angular
    .module('app.register')
    .config(Config);

  Config.$inject = ['$httpProvider'];

  //////////////

  function Config($httpProvider) {
    $httpProvider.interceptors.push('CheckRegistrationInterceptor');
  }

})();
