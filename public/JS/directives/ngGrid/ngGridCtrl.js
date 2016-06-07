angular.module("app").controller("ngGridCtrl", function($scope, ngGridSvc) {



   $scope.gridOptions = {
         data: 'clinicData',
         // height: '110px',
         sortInfo: {fields: ['patientID', 'lastName', 'middleName', 'firstName', 'billID', 'totalCharged', 'balanceDue', 'dateCharged', 'dateDue', 'daysPastDue'], directions: ['asc']},
         columnDefs: [
           {field: 'previewUrl', displayName: 'PatientID#', width: '10%', cellTemplate: '<div class="ngCellText" ng-class="col.colIndex()"><a href="{{row.getProperty(col.field)}}"></a></div>'},
           {field: 'artistName', displayName: 'Last Name', width: '10%'},
           {field: 'collectionName', displayName: 'Middle Name', width: '10%'},
           {field: 'primaryGenreName', displayName: 'First Name', width: '10%'},
           {field: 'billID', displayName: 'Bill ID#', width: '10%', cellTemplate: '<div class="ngCellText" ng-class="col.colIndex()"><img src="{{row.getProperty(col.field)}}"></div>'},
           {field: 'totalCharged', displayName: 'Total Charged', width: '10%'},
           {field: 'balanceDue', displayName: 'Balance Due', width: '10%'},
           {field: 'dateCharged', displayName: 'Date Charged', width: '10%'},
           {field: 'dateDue', displayName: 'Date Due', width: '10%'},
           {field: 'daysPastDue', displayName: 'Days Past Due', width: '10%'},
         ]
     };


       $scope.getClinicData = function(filter) {
         //  console.log($scope.filter)
         ngGridSvc.getClinicData(filter)
         .then(function(res) {
            $scope.clinicData = res;
         })
      }



});//end controller
