angular.module('app.services', [])

  .factory('Season', function ($resource) {
    return $resource('http://localhost:8080/seasons/:id', {id: '@id'});
  })

  .service('historyService', function ($ionicHistory) {

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
    this.removeBackFor = function (stateNames) {
      if (!stateNames || stateNames.length == 0) return;

      var historyBack = $ionicHistory.viewHistory().backView;
      var historyForward = $ionicHistory.viewHistory().forwardView;

      //console.log($ionicHistory.viewHistory());
      //console.log("Back: ", historyBack);

      if (historyForward == null && historyBack != null) {
        stateNames.forEach(function (stateName) {
          if (stateName == historyBack.stateName) {
            //console.log("Removing back view");
            $ionicHistory.removeBackView();
            return;
          }
        });
      }

    }
  });

