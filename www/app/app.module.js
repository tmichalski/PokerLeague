(function() {
  'use strict';

  angular
    .module('app',
    [
      'app.core',

      // Modularize
      'app.controllers',
      'app.routes',
      'app.directives',

      // Features
      'app.auth',
      'app.seasons' //,
      // 'app.league',
      // 'app.events',
      // 'app.profile'
    ]);


  angular
    .module('app.core',
    [
      'ionic',
      'ngResource',
      'app.common',
      'app.interceptors'
    ]);

})();
