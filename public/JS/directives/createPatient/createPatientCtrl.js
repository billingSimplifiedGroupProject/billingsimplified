angular.module("app").controller("createPatientCtrl", function($scope, createPatientSvc) {


$scope.createPatient = function(newPatient) {
   console.log(newPatient);
   createPatientSvc.createPatient(newPatient)}
//    .then(function(res) {
//       $scope.patientCreated = res.data
// });


});// end of controller
