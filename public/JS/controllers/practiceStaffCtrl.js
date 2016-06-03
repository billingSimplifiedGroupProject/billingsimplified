angular.module("app")
    .controller('practiceStaffCtrl', function($scope, practiceStaffService, practiceStaffAndClinic) {

        console.log(practiceStaffAndClinic);

        $scope.staffMember = practiceStaffAndClinic.currentUser;
        $scope.currentPractice = practiceStaffAndClinic.practice

        $scope.currentPracticeId = practiceStaffAndClinic.practice._id;

        $scope.addBill = true;
        $scope.showAddBill = function(fName, lName, id) {
            $scope.addBill = !$scope.addBill
            $scope.patientInfo = {
                patientName: fName + " " + lName,
                id: id
            };
        }

        $scope.submitBill = function(bill, patientInfo) {
            console.log(bill, patientInfo);
            practiceStaffService.submitBill(bill, patientInfo)
                .then(function(response) {
                    console.log("new patient", response);
                    practiceStaffService.addToBillArray(response)
                })
        }

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
