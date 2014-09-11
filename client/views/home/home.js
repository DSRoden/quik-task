(function(){
  'use strict';

  angular.module('quik-task')
  .controller('HomeCtrl', ['$scope', '$interval', 'Home', function($scope, $interval, Home){
    Home.getMessage().then(function(response){
      $scope.mean = response.data.mean;
    });
  }]);
})();

