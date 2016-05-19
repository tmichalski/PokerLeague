angular.module('app.controllers', [])

.controller('cRB2016SeasonCtrl', function($scope) {
  // Fetch the active year
  $scope.year = 2016;

  // Fetch the active members w/ season points + points from 1st
  $scope.rankedUsers = [
    {'id': 1, 'name': 'Mac', 'rank': 1, 'score': 405, 'outFromFirst': 0},
    {'id': 2, 'name': 'Hart', 'rank': 2, 'score': 315, 'outFromFirst': 95},
    {'id': 3, 'name': 'Derek', 'rank': 3, 'score': 150, 'outFromFirst': 255},
    {'id': 4, 'name': 'Ward', 'rank': 4, 'score': 100, 'outFromFirst': 305},
    {'id': 5, 'name': 'Schulz', 'rank': 5, 'score': 50, 'outFromFirst': 355},
    {'id': 6, 'name': 'Paul', 'rank': 6, 'score': 25, 'outFromFirst': 380}
  ];

  // Fetch the active season schedule w/ event winner + points
  $scope.events = [
    {'id': 1, 'date': '1/23', 'host': 'Paul', 'winnerName': 'Mac', 'winnerScore': 105},
    {'id': 2, 'date': '2/15', 'host': 'Mac', 'winnerName': 'Paul', 'winnerScore': 75},
    {'id': 3, 'date': '3/12', 'host': 'Derek', 'winnerName': 'Derek', 'winnerScore': 250},
    {'id': 4, 'date': '4/5', 'host': 'Hart', 'winnerName': 'Schulz', 'winnerScore': 150},
    {'id': 5, 'date': '5/9', 'host': 'Ward', 'winnerName': 'Ward', 'winnerScore': 165},
    {'id': 6, 'date': '6/12', 'host': 'Schulz', 'winnerName': 'TBD', 'winnerScore': 0},
    {'id': 6, 'date': '7/22', 'host': 'Mac', 'winnerName': 'TBD', 'winnerScore': 0}
  ];

})

.controller('eventCtrl', function($scope) {

})

.controller('cRB2016612SchulzCtrl', function($scope) {

})

.controller('seasonsCtrl', function($scope) {

})

.controller('profileCtrl', function($scope) {

})

.controller('addEventCtrl', function($scope) {

})

.controller('seasonAddCtrl', function($scope) {

})
