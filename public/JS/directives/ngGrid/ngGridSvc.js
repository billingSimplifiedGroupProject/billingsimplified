angular.module("app").service("ngGridSvc", function($http) {


   // this.getClinicData = function (filter) {
   //       var deferred = $q.defer()
   //      $http({
   //         method: 'JSONP',
   //         url: '/get/patients?' + filter.lastName
   //      }).then(function(response) {
   //         console.log(response);
   //         deferred.resolve(response.data.results);
   //      })
   //      return deferred.promise;
   //    }

      this.getClinicData = function(filter) {
        return $http({
           method: 'GET',
           url: '/get/patients?' + filter.lastName
           }).then(function(res) {
             console.log(res)
              return res
              })
              };



});//end of service
