angular.module('app', ['ionic', 'app.controllers', 'app.routes', 'app.services', 'app.interceptors', 'app.directives', 'angular-momentjs', 'ngResource'])

  .config(['$httpProvider', function($httpProvider) {
    $httpProvider.interceptors.push('authorizationInterceptor');
    $httpProvider.interceptors.push('unauthorizedInterceptor');
    $httpProvider.interceptors.push('notRegisteredInterceptor');
  }])

  .run(['$rootScope', '$injector', '$ionicPlatform', function ($rootScope, $injector, $ionicPlatform) {
    $ionicPlatform.ready(function () {

      if (window.cordova.platformId == "browser") {
        facebookConnectPlugin.browserInit('1602299076749398');
      }

      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        cordova.plugins.Keyboard.disableScroll(true);
      }
      if (window.StatusBar) {
        // org.apache.cordova.statusbar required
        StatusBar.styleDefault();
      }
    });
  }]);
