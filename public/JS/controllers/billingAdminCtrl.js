angular.module("app").controller('billingAdminCtrl', function($scope, billingAdminService) {
$scope.clinicAdded = false;
$scope.createNewPractice = function(newPractice) {
    billingAdminService.createNewPractice(newPractice)
        .then(function(response) {
            $scope.practiceId = response._id;
            $scope.clinicAdded = true;
        })
}
//
$scope.getPractices = function() {
    billingAdminService.getPractices().then(function(response){
      $scope.practices = response.data;
      console.log(response.data);
    })
}()
$scope.createNewUser = function(newUser, practiceId) {
    billingAdminService.createNewUser(newUser, practiceId);
    $scope.newUser = "";
}
$scope.practiceShow = true;
$scope.choosePractice = function (){
$scope.practiceShow=!$scope.practiceShow;
}
});
