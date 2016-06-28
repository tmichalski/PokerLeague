/*
 * Directive code came from GitHub @gffuma on issue https://github.com/driftyco/ionic/issues/1647
 */
(function () {
  'use strict';

  angular
    .module('app.common')
    .directive('forceNavBackButton', ForceNavBackButton);

  ForceNavBackButton.$inject = ['$ionicHistory', '$state', '$stateParams', '$ionicConfig', '$ionicViewSwitcher', '$ionicPlatform'];

  ///////////////

  function ForceNavBackButton($ionicHistory, $state, $stateParams, $ionicConfig, $ionicViewSwitcher, $ionicPlatform) {

    return {
      link: link,
      restrict: 'EA'
    };

    ///////////////

    function link(scope, element, attrs) {

      scope.goBack = function () {
        if (_getBackOptions()) {
          _goBack();
        } else if ($ionicHistory.backView()) {
          $ionicHistory.goBack();
        }
      };

      scope.$on('$stateChangeSuccess', function () {
        element.toggleClass('hide', !_getBackOptions());
      });

      // Android back button hook
      $ionicPlatform.registerBackButtonAction(function () {
        if (_getBackOptions()) {
          _goBack();
        } else if ($ionicHistory.backView()) {
          $ionicHistory.goBack();
        } else {
          navigator.app.exitApp();
        }
      }, 100);

      function _getBackOptions() {
        return ($state.current || {}).back;
      }

      function _goBack() {
        var backOptions = _getBackOptions();

        $ionicViewSwitcher.nextDirection('back');
        $ionicHistory.nextViewOptions(backOptions.nextViewOptions);

        var params = {};

        if (backOptions.getStateParams) {
          params = backOptions.getStateParams($stateParams);
        }

        $state.go(backOptions.state, params);
      }
    }
  }

})();
