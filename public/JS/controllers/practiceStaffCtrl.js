angular.module("app")
    .controller('practiceStaffCtrl', function ($scope, practiceStaffService, practiceStaffAndClinic) {

        console.log(practiceStaffAndClinic);

        // Modal show and hide
        $scope.modalShown = false;
        $scope.toggleModal = function () {
            $scope.modalShown = !$scope.modalShown;
        };


        $scope.staffMember = practiceStaffAndClinic.currentUser;
        $scope.currentPractice = practiceStaffAndClinic.practice

        $scope.currentPracticeId = practiceStaffAndClinic.practice._id;

        $scope.addBill = true;

        $scope.showAddBill = function (id) {
            $scope.addBill = !$scope.addBill
            practiceStaffAndClinic.practice.patients.forEach(function (i) {
                if (i._id === id) {
                    $scope.patientInfo = i;
                }
            })
            // $scope.patientInfo = {
            //     patientName: fName + " " + lName,
            //     id: id
            // };
        }

        $scope.submitBill = function (bill, patientId) {
            practiceStaffService.submitBill(bill, patientId)
                .then(function (response) {
                    practiceStaffService.addToBillArray(response)
                        // console.log("submit bill response", response);
                        .then(function (response) {
                        })
                })
        }

        $scope.addPatient = function (patient, practiceId) {
            practiceStaffService.addPatient(patient, practiceId)
                .then(function (response) {
                    $scope.newAddPatient = response.data;
                    practiceStaffService.addToPatientArray(response.data)
                        .then(function (response) {
                            console.log(response);
                        })
                })
        };

        $scope.addPayment = true;
        $scope.showAddPayment = function (id) {
            $scope.addPayment = !$scope.addPayment;
            $scope.billId = id;
        }

        $scope.makePayment = function (paymentInfo, billId) {
            practiceStaffService.makePayment(paymentInfo, billId)
                .then(function (response) {
                    console.log(response);
                })
        }



    });
