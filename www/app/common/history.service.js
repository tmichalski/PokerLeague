(function () {
  'use strict';

  angular
    .module('app.common')
    .factory('historyService', HistoryService);

  HistoryService.$inject = ['$ionicHistory', 'routeService'];

  /**
   * For certain situations like a add/edit page, the user shouldn't be able to
   * go back to the editable page, instead lead the user back to the prior page
   * before the edit page.
   *
   * This will only work under the following circumstances:
   * 1) There are no "forward" pages, meaning the user hasn't already clicked back to some historical page
   * 2) The user has history to click back to
   * 3) The most recent history page matches a string in the given stateNames
   *
   * @param stateNames - an array of strings that match history pages (aka State Names)
   */
  function HistoryService($ionicHistory, routeService) {

    return {
      removeBackFor: removeBackFor
    };

    ////////////

    function removeBackFor(stateNames) {
      if (!stateNames || stateNames.length == 0) return;

      var historyBack = $ionicHistory.viewHistory().backView;
      var historyForward = $ionicHistory.viewHistory().forwardView;

      if (historyForward == null && historyBack != null) {
        stateNames.forEach(function (stateName) {

          // Get current route name
          var name = routeService.getRoute(stateName);
          if (name == historyBack.stateName) {
            $ionicHistory.removeBackView();
            return;
          }
        });
      }
    }

  }

})();
