(function () {
  'use strict';

  angular
    .module('app.common')
    .directive('hideTopTabs', HideTopTabsDirective);

  HideTopTabsDirective.$inject = ['$rootScope'];

  ///////////////

  function HideTopTabsDirective($rootScope) {
    return {
      restrict: 'A',
      link: directive
    };

    function directive() {
      $rootScope.$broadcast('hideTopTabs');
    }

  }

})();
