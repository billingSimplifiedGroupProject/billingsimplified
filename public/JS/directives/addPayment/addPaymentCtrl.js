angular.module("app").controller("addPaymentCtrl", function($scope, addPaymentSvc) {


$scope.addPayment = function(payment) {
   console.log(payment);
   addPaymentSvc.addPayment(payment)}
//    .then(function(res) {
//       $scope.billCreated = res.data
// });


});// end of controller
