angular.module('app.interceptors', [])

.service('unauthorizedInterceptor', function($q) {
  var service = this;
  service.responseError = function(response) {
    if (response.status == 401){
      window.location = "#/login";
    }
    return $q.reject(response);
  };
})

.service('authorizationInterceptor', function($window) {
  var service = this;
  service.request = function(request) {
    request.headers['Authorization'] = $window.localStorage.authToken;
    return request;
  };
});
