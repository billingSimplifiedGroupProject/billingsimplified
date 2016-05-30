angular.module("billingsimplified").controller("login.controller", function($scope) {



$scope.login = function() {
   loginSvc.svcLogin().then(function(res) {
      $scope.dataOnView = res;
      // console.log(res);
   })
}




});
