angular.module( "app" ).directive( "createBillDir", function () {

     return {
       // scope: {
       //    templHtmlName: '=passToDirName'
       // },
       //  link: function(scope, element, attribute) {},
       templateUrl: './JS/directives/createBill/createBill.html',
       restrict: 'E',   //link: function(scope, element, attr) {}, scope: {}   **also optoins,
       controller: 'createBillCtrl'
     };

  });
