
angular.module("app").controller('loginCtrl', function($scope, loginSvc) {


$scope.login = function(user) {
   loginSvc.login(user).then(function(res) {
      $scope.logindata = res;
      console.log(res);
   })
}


});
