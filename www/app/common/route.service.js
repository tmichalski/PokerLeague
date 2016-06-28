(function () {
  'use strict';

  angular
    .module('app.common')
    .factory('routeService', RouteService);

  RouteService.$inject = ['$state'];

  function RouteService($state) {

    return {
      go: go,
      getRoute: getRoute
    };

    ////////////

    function go(routeName, params) {
      $state.go(getRoute(routeName), params);
    }

    function getRoute(routeName) {
      var ctrlConfig = ($state.current || {});
      var route = (ctrlConfig.route || {});
      return route[(routeName)] || routeName;
    }

  }

})();
