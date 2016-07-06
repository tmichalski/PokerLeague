(function () {
  'use strict';

  angular
    .module('app')
    .run(Bootstrap);

  Bootstrap.$inject = ['$window', '$ionicPlatform', '$rootScope', 'appConfig', 'historyService'];

  function Bootstrap($window, $ionicPlatform, $rootScope, appConfig, historyService) {
    $ionicPlatform.ready(function () {

      if ($window.cordova.platformId == "browser") {
        facebookConnectPlugin.browserInit(appConfig.facebookAppId);
      }

      $rootScope.$on('$ionicView.beforeEnter', function() {
        historyService.removeIgnoredViews();
      });

      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      if ($window.cordova && $window.cordova.plugins && $window.cordova.plugins.Keyboard) {
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        cordova.plugins.Keyboard.disableScroll(true);
      }
      if ($window.StatusBar) {
        // org.apache.cordova.statusbar required
        StatusBar.styleDefault();
      }
    });
  }

})();
