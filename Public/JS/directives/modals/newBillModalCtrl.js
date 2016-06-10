angular.module("app")
    .controller('newBillModalCtrl', function ($scope) {

        // Modal show and hide
        $scope.modalShown = false;
        $scope.toggleModal = function () {
            console.log("hit modal");
        $scope.modalShown = !$scope.modalShown;
        };

        // $scope.staffMember = practiceStaffAndClinic.currentUser;
        // $scope.currentPractice = practiceStaffAndClinic.practice

        // $scope.currentPracticeId = practiceStaffAndClinic.practice._id;

        $scope.addBill = true;

        $scope.showAddBill = function (id) {
            $scope.addBill = !$scope.addBill
            practiceStaffAndClinic.practice.patients.forEach(function (i) {
                if (i._id === id) {
                    $scope.patientInfo = i;
                }
            })
        }

        $scope.submitBill = function (bill, patientId) {
            practiceStaffService.submitBill(bill, patientId)
                .then(function (response) {
                    practiceStaffService.addToBillArray(response)

                    // console.log("submit bill response", response);
                        .then(function(response) {
                            $scope.bill = "";
                        })
                })
        }

        
    });