angular.module("app").service("ngGridSvc", function($http, $q) {


   this.getClinicData = function (filter) {
         var deferred = $q.defer()
        $http({
           method: 'JSONP',
           url: 'https://itunes.apple.com/search?term=' + filter.lastName + '&callback=JSON_CALLBACK'
        }).then(function(response) {
           console.log(response);
           deferred.resolve(response.data.results);
        })
        return deferred.promise;
      }



});//end of service
