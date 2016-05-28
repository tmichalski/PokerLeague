angular.module('app.services', [])

.factory('Season', function($resource) {
  return $resource('http://localhost:8081/seasons/:id', {id: '@id'}, {
    update: {
      method: 'PUT'
    }
  });
})

.factory('BlankFactory', [function(){

}])

.service('BlankService', [function(){

}]);

