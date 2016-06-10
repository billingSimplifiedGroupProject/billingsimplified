angular.module("app")
    .controller('billModalCtrl', function ($scope) {

        // Modal show and hide
        $scope.modalShown = false;
        $scope.toggleModal = function () {
            console.log("hit modal");
        $scope.modalShown = !$scope.modalShown;
        };
        
    });