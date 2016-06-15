angular.module("app")
    .controller('billModalCtrl', function ($scope, practiceStaffService, billService, $stateParams, $state) {

        // Modal show and hide
        $scope.billModalShown = false;
        $scope.toggleBillModal = function (billId) {
            if ($scope.billModalShown === false) {
                billService.getBill(billId).then(function (response) {
                    console.log(response);
                    $scope.billInfo = response.data;
                    $scope.billInfo.dateDue = response.data.dateDue;
                    console.log($scope.billInfo);
                    var today = Date.now();
                    var dueDate = new Date($scope.billInfo.dateDue);
                    console.log(dueDate);
                    dueDate = dueDate.getTime();

                    var days = today - dueDate;

                    days = days / 86400000;

                    $scope.daysPastDue = Math.floor(days);



                    console.log(today);
                    console.log(dueDate);
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


    });