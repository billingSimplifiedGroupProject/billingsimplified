angular.module("app")
    .controller('billModalCtrl', function ($scope, practiceStaffService, billService, $stateParams, $state) {

        // Modal show and hide
        $scope.billModalShown = false;
        $scope.toggleBillModal = function (billId) {
            if ($scope.billModalShown === false) {
                billService.getBill(billId).then(function (response) {
                    console.log(response);
                    $scope.billInfo = response.data;
                    // $scope.billInfo.dateDue = response.data.dateDue;
                })
                $scope.billModalShown = !$scope.billModalShown
            } else {
                $scope.billModalShown = !$scope.billModalShown
            }
        };

        $scope.makePayment = function (paymentInfo, billId) {
            console.log("hitting here")
            practiceStaffService.makePayment(paymentInfo, billId)
                .then(function (response) {
                    console.log(response);
                    $scope.payment = "";
                    billService.getBill(billId).then(function (response) {
                        console.log(response);
                        $scope.billInfo = response.data;
                    })
                })
        }

        // var today = new Date ();
        // var dueDate = new Date ($scope.billInfo.dateDue);

        // $scope.daysPastDue = dueDate - today;

        // console.log(today);


    });