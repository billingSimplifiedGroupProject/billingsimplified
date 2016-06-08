angular.module("app").service("ngGridSvc", function($http, $q) {


   this.getClinicData = function (filter) {
         var deferred = $q.defer()
        $http({
           method: 'GET',
           url: '/get/patientsx',
           params: filter
        }).then(function(res) {
           console.log(res);
           deferred.resolve(res);
        })
        return deferred.promise;
      }

      // this.getClinicData = function(filter) {
      //   return $http({
      //      method: 'GET',
      //      url: '//get/patientsx' + filter.lastName
      //      }).then(function(res) {
      //        console.log(res)
      //         return res
      //         })
      //         };



});//end of service
