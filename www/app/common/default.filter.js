(function () {
  'use strict';

  angular
    .module('app.common')
    .filter('default', DefaultFilter);

  function DefaultFilter() {

    return filter;

    ////////////

    function filter(input, defaultValue) {
      if (angular.isUndefined(input) || input === null || input === '') {
        return defaultValue;
      }

      return input;
    }

  }

})();
