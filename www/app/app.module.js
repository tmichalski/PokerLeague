(function() {
  'use strict';

  angular
    .module('app',
    [
      'app.core',

      // Features
      'app.auth',
      'app.register',
      'app.profile',
      'app.league',
      'app.season',
      'app.member',
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
