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
      console.log(response);
    })
}()
$scope.createNewUser = function(newUser, practiceId) {
    billingAdminService.createNewUser(newUser, practiceId);
    $scope.newUser = "";
}

$scope.hidden = true;
$scope.unhidden = function(practice){
  $scope.hidden=!$scope.hidden;
  $scope.chosenClinic = practice;
}

$scope.submitChart = function(practiceChart, id){
  billingAdminService.submitChart(practiceChart, id).then(function(response){
    return response;
    console.log(response);
  });
}
});
