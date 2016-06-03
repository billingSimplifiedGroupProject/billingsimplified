angular.module("app").service("createPatientSvc", function($http, $q) {


this.createPatient = function(newPatient) {
  return $http({
     method: 'POST',
     url: '/create/patient'
     }).then(function(res) {
        console.log(res)
        return res
        })
        };

});
