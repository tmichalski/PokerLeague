(function() {
  'use strict';

  angular
    .module('app',
    [
      'app.core',

      // Modularize
      'app.controllers',
      'app.routes',
      'app.services',
      'app.directives',

      // Features
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
