(function () {
  'use strict';

  angular
    .module('app.common')
    .factory('routeService', RouteService);

  RouteService.$inject = ['$state'];

  function RouteService($state) {

    return {
      get: get,
      go: go,
      getRoute: getRoute
    };

    ////////////

    function get(routeName) {
      return $state.get(routeName);
    }

    function go(routeName, params) {
      $state.go(getRoute(routeName), params);
    }

    function getRoute(routeName) {
      var ctrlConfig = ($state.current || {});
      var redirect = (ctrlConfig.redirect || {});
      return redirect[routeName] || routeName;
    }

  }

})();
