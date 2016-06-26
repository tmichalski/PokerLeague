/*
 * Directive code came from GitHub @gffuma on issue https://github.com/driftyco/ionic/issues/1647
 */
(function () {
  'use strict';

  angular
    .module('app.common')
    .directive('defaultNavBackButton', DefaultNavBackButton);

  DefaultNavBackButton.$inject(['$ionicHistory', '$state', '$ionicConfig', '$ionicViewSwitcher', '$ionicPlatform']);

  ///////////////

  function DefaultNavBackButton($ionicHistory, $state, $ionicConfig, $ionicViewSwitcher, $ionicPlatform) {

    return {
      link: link,
      restrict: 'EA'
    };

    ///////////////

    function link(scope, element, attrs) {

      scope.backTitle = function () {
        var defaultBack = getDefaultBack();
        if ($ionicConfig.backButton.previousTitleText() && defaultBack) {
          return $ionicHistory.backTitle() || defaultBack.title;
        }
      };

      scope.goBack = function () {
        if ($ionicHistory.backView()) {
          $ionicHistory.goBack();
        } else {
          goDefaultBack();
        }
      };

      scope.$on('$stateChangeSuccess', function () {
        element.toggleClass('hide', !getDefaultBack());
      });

      $ionicPlatform.registerBackButtonAction(function () {
        if ($ionicHistory.backView()) {
          $ionicHistory.goBack();
        } else if (getDefaultBack()) {
          goDefaultBack();
        } else {
          navigator.app.exitApp();
        }
      }, 100);

    }

    function getDefaultBack() {
      return ($state.current || {}).defaultBack;
    }

    function goDefaultBack() {
      $ionicViewSwitcher.nextDirection('back');
      $ionicHistory.nextViewOptions({
        disableBack: true,
        historyRoot: true
      });

      var params = {};

      if (getDefaultBack().getStateParams) {
        params = getDefaultBack().getStateParams($stateParams);
      }

      $state.go(getDefaultBack().state, params);
    }
  }

});
