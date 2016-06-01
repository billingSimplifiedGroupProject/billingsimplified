angular.module( "app" ).directive( "ngGridDir", function () {

     return {
       // scope: {
       //    templHtmlName: '=passToDirName'
       // },
       //  link: function(scope, element, attribute) {},
       templateUrl: './JS/directives/ngGrid/ngGrid.html',
       restrict: 'E',   //link: function(scope, element, attr) {}, scope: {}   **also optoins,
       controller: 'ngGridCtrl'
    };//end of return object

});//end of directive
