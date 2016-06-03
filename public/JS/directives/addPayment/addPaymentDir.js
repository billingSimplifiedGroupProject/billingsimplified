angular.module( "app" ).directive( "addPaymentDir", function () {

     return {
       // scope: {
       //    templHtmlName: '=passToDirName'
       // },
       //  link: function(scope, element, attribute) {},
       templateUrl: './JS/directives/addPayment/addPayment.html',
       restrict: 'E',   //link: function(scope, element, attr) {}, scope: {}   **also optoins,
       controller: 'addPaymentCtrl'
     };

  });
