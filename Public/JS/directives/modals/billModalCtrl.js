angular.module("app")
    .controller('billModalCtrl', function ($scope, practiceStaffService, billService, $stateParams) {

        // Modal show and hide
        $scope.billModalShown = false;
        $scope.toggleBillModal = function (billId) {
            if ($scope.billModalShown === false) {
                billService.getBill(billId).then(function (response) {
                    console.log(response);
                    $scope.billInfo = response.data;
                })
                $scope.billModalShown = !$scope.billModalShown
            } else {
                $scope.billModalShown = !$scope.billModalShown
            }
            // $scope.billId = billId;
            // console.log("hit modal");
            // $scope.billModalShown = !$scope.billModalShown;
        };

        // console.log($scope.billId)

        // $scope.getBillInfo = function (billId) {
        //     console.log(billId)
        //     billService.getBill(billId).then(function (response) {
        //         console.log(response);
        //         $scope.billInfo = response;
        //     })
        // }

        // $scope.getBillInfo();

    });