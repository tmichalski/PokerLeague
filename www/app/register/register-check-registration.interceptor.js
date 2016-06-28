(function () {
  'use strict';

  angular
    .module('app.register')
    .factory('CheckRegistrationInterceptor', CheckRegistrationInterceptor);

  CheckRegistrationInterceptor.$inject = ['$q', '$window'];

  //////////////

  function CheckRegistrationInterceptor($q, $window) {
    return {
      responseError: function (response) {
        if (response.status == 412) {
          $window.location = "#/register";
        }
        return $q.reject(response);
      }
    }
  }

})();
