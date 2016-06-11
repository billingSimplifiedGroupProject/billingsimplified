angular.module("app").controller("csvImportCtrl", function($scope) {

$scope.csvupload = function(csv) {
   if(csv) {
      console.log(csv)
      // var newPatient;
      // newPatient.firstName=csv[0];
      // newPatient.lastName=csv[1];
      // newPatient.insurance=csv[2];
      // newPatient.email=csv[3];
      // newPatient.dob=csv[4];

      alert("upload successful")
      // console.log(newPatient)
      // csvSvc.csvupload(newPatient)
   }
   else {
      alert("please select a file")
   }
   $scope.csv = undefined;
}


});//end controller
