(function () {
  'use strict';

  angular
    .module('app')
    .constant('appConfig', AppConfig());

  //////////////

  function AppConfig() {
    return {
      facebookAppId: '1602299076749398',
      serverHostName: 'http://pokerleague.lssinc.com'
    }
  }

})();
