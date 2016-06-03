angular.module("app").service("addPaymentSvc", function($http, $q) {

this.addPayment = function(payment) {
  return $http({
     method: 'POST',
     url: '/create/bill'
     }).then(function(res) {
        console.log(res)
        return res
        })
        };

});
