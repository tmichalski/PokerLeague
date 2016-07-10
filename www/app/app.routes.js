(function () {
  'use strict';

  angular
    .module('app')
    .config(Config);

  Config.$inject = ['$stateProvider', '$urlRouterProvider', '$provide'];

  ///////////////

  function Config($stateProvider, $urlRouterProvider, $provide) {
    $stateProvider
      .state('tab', {
        templateUrl: 'app/app-tabs.html',
        abstract: true
      });

    $urlRouterProvider.otherwise('/league')


    // DEBUG ONLY (do not remove)
    // Output all angularJs Events to console for debugging a page's events.
    // $provide.decorator('$rootScope', function ($delegate) {
    //   var _emit = $delegate.$emit;
    //   var _broadcast = $delegate.$broadcast;
    //
    //   $delegate.$emit = function () {
    //     console.log("[$emit] " + arguments[0]);
    //     return _emit.apply(this, arguments);
    //   };
    //
    //   $delegate.$broadcast = function () {
    //     console.log("[$broadcast] " + arguments[0]);
    //     return _broadcast.apply(this, arguments);
    //   };
    //
    //   return $delegate;
    // });

  }

})();
