angular.module( "app" ).directive( "createPatientDir", function () {

     return {
       // scope: {
       //    templHtmlName: '=passToDirName'
       // },
       //  link: function(scope, element, attribute) {},
       templateUrl: './JS/directives/createPatient/createPatient.html',
       restrict: 'E',   //link: function(scope, element, attr) {}, scope: {}   **also optoins,
       controller: 'createPatientCtrl'
     };

  });
