angular.module("app").service("createBillSvc", function($http, $q) {

this.createBill = function(newBill) {
  return $http({
     method: 'POST',
     url: '/create/bill'
     }).then(function(res) {
        console.log(res)
        return res
        })
        };

});
