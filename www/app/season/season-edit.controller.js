(function () {
  'use strict';

  angular
    .module('app.seasons')
    .controller('SeasonEditCtrl', SeasonEditCtrl);

  SeasonEditCtrl.$inject = ['$state', '$stateParams', 'Season'];

  //////////////

  function SeasonEditCtrl($state, $stateParams, Season) {
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
          $state.go('tab.seasonView', {id: vm.season.id});
        });
    }

    function deleteSeason() {
      var msg = "Are you sure you want to delete the " + vm.season.year + " season?\n\n"
        + "WARNING! Deleting your season will also delete all events and information tied to a season. ";

      if (window.confirm(msg)) {
        vm.season.$delete()
          .then(function () {
            $state.go('tab.seasonView', {id: vm.season.id});
          });
      }
    }
  }

})();
