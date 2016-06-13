(function() {
  'use strict';

  angular
    .module('app',
    [
      'app.core',

      // Features
      'app.auth',
      'app.profile',
      'app.league',
      'app.season',
      'app.event'
    ]);


  angular
    .module('app.core',
    [
      'ionic',
      'ionicUIRouter',
      'ngResource',
      'app.common'
    ]);

})();
