angular.module("app").controller("createBillCtrl", function($scope, createBillSvc) {


$scope.createBill = function(newBill) {
   console.log(newBill);
   createBillSvc.createBill(newBill)}
//    .then(function(res) {
//       $scope.billCreated = res.data
// });


});// end of controller
