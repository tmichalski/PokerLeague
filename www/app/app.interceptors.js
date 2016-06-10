angular.module('app.interceptors', [])

.service('notRegisteredInterceptor', function($q, $window) {
  var service = this;
  service.responseError = function(response) {
    if (response.status == 412) {
      $window.location = "#/register";
    }
    return $q.reject(response);
  }
})
;
