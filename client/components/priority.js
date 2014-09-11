(function(){
  'use strict';

  angular.module('quik-task')
  .factory('Priority', ['$http', function($http){

    function create(priority){
      return $http.post('/priorities', priority);
    }

    return {create:create};
  }]);
})();

