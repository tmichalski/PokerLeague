(function () {
  'use strict';

  angular
    .module('app.season')
    .controller('SeasonEditCtrl', SeasonEditCtrl);

  SeasonEditCtrl.$inject = ['$stateParams', '$ionicPopup', 'Season', 'routeService', 'historyService'];

  //////////////

  function SeasonEditCtrl($stateParams, $ionicPopup, Season, routeService, historyService) {
    var vm = this;

    vm.season = getSeason();
    vm.saveSeason = saveSeason;
    vm.deleteSeason = deleteSeason;

    function getSeason() {
      var season;

      if ($stateParams.id) {
        season = Season.get({id: $stateParams.id});
      } else {
        season = new Season();
        season.isActive = false;
      }

      return season;
    }

    function saveSeason() {
      vm.season.$save()
        .then(function () {
          routeService.go("tab.seasonView", {id: vm.season.id});
        });
    }

    function deleteSeason() {
      var confirm = $ionicPopup.confirm({
        title: "Delete Season",
        template: "Are you sure you want to delete the " + vm.season.year + " season?<br /><br />"
        + "WARNING! Deleting your season will also delete all events and information tied to a season. "
      });

      confirm.then(function(res) {
        if (res) {
          vm.season.$delete()
            .then(function () {
              historyService.nextViewIsRoot();
              routeService.go("tab.seasons");
            });
        }
      });
    }
  }

})();
