(function () {
  'use strict';

  angular
    .module('app.common')
    .directive('hideBottomTabs', HideBottomTabsDirective);

  HideBottomTabsDirective.$inject = ['$rootScope'];

  ///////////////

  function HideBottomTabsDirective($rootScope) {
    return {
      restrict: 'A',
      link: directive
    };

    function directive($scope) {
      $rootScope.hideBottomTabs = 'tabs-item-hide';
      $scope.$on('$ionicView.beforeLeave', function () {
        $rootScope.hideBottomTabs = '';
      });
    }

  }

})();
