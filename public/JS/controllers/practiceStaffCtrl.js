angular.module("app")
    .controller('practiceStaffCtrl', function($scope, practiceStaffService, practiceStaffAndClinic) {

        console.log(practiceStaffAndClinic);

        $scope.staffMember = practiceStaffAndClinic.currentUser;
        $scope.currentPractice = practiceStaffAndClinic.practice

        $scope.currentPracticeId = practiceStaffAndClinic.practice._id;

        $scope.addPatient = function(patient, practiceId) {
            practiceStaffService.addPatient(patient, practiceId)
                .then(function(response) {
                    console.log(response);
                    $scope.newAddPatient = response.data;
                })
        },
        $scope.addToPatientArray = function(newAddPatient){
          practiceStaffService.addToPatientArray(newAddPatient).then (function(response){
            console.log(response);
          })
        }



});
