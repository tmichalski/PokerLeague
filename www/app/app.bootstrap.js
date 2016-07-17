(function () {
  'use strict';

  angular
    .module('app')
    .run(Bootstrap);

  Bootstrap.$inject = ['$window', '$ionicPlatform', '$rootScope', 'appConfig', 'historyService'];

  function Bootstrap($window, $ionicPlatform, $rootScope, appConfig, historyService) {
    $ionicPlatform.ready(function () {

      // ----------------------------------------------------------------------
      // Facebook Plugin: Browser Init
      // ----------------------------------------------------------------------
      if ($window.cordova.platformId == "browser") {
        facebookConnectPlugin.browserInit(appConfig.facebookAppId);
      }

      // ----------------------------------------------------------------------
      // History: Remove Ignored Views
      // ----------------------------------------------------------------------
      $rootScope.$on('$ionicView.beforeEnter', function() {
        historyService.removeIgnoredViews();
      });

      // ----------------------------------------------------------------------
      // Tabs: Show/Hide
      // ----------------------------------------------------------------------
      $rootScope.$on('$stateChangeSuccess', function () {
        $rootScope.hideTopTabs = '';
        $rootScope.hideBottomTabs = '';
      });
      $rootScope.$on('hideTopTabs', function () {
        $rootScope.hideTopTabs = 'tabs-item-hide';
      });
      $rootScope.$on('hideBottomTabs', function () {
        $rootScope.hideBottomTabs = 'tabs-item-hide';
      });

      // ----------------------------------------------------------------------
      // Hide the accessory bar by default (remove this to show the accessory
      // bar above the keyboard for form inputs)
      // ----------------------------------------------------------------------
      if ($window.cordova && $window.cordova.plugins && $window.cordova.plugins.Keyboard) {
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        cordova.plugins.Keyboard.disableScroll(true);
      }
      if ($window.StatusBar) {
        StatusBar.styleDefault(); // org.apache.cordova.statusbar required
      }
    });
  }

})();
