(function () {
  'use strict';

  angular
    .module('app.common')
    .directive('scrollBottom', ScrollBottomDirective);

  ScrollBottomDirective.$inject = ['$ionicScrollDelegate'];

  ///////////////

  function ScrollBottomDirective($ionicScrollDelegate) {
    return {
      restrict: 'A',
      scope: {

      },
      link: directive
    };

    function directive(scope, element, attrs) {
      $ionicScrollDelegate.$getByHandle(attrs.scrollBottom).scrollBottom();
    }

  }

})();
