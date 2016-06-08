angular.module("app").controller("ngGridCtrl", function($scope, ngGridSvc) {



   $scope.gridOptions = {
         data: 'clinicData',
         // height: '110px',
         sortInfo: {fields: ['patientId', 'lastName', 'middleName', 'firstName', 'billID', 'phoneNumber', 'balanceDue', 'dateCharged', 'dateDue', 'daysPastDue'], directions: ['asc']},
         columnDefs: [
           {field: 'patientId', displayName: 'PatientID#', width: '10%', cellTemplate: '<div class="ngCellText" ng-class="col.colIndex()"><a href="{{row.getProperty(col.field)}}"></a></div>'},
           {field: 'lastName', displayName: 'Last Name', width: '10%'},
           {field: 'middleName', displayName: 'Middle Name', width: '10%'},
           {field: 'firstName', displayName: 'First Name', width: '10%'},
           {field: 'billID', displayName: 'Bill ID#', width: '10%', cellTemplate: '<div class="ngCellText" ng-class="col.colIndex()"><img src="{{row.getProperty(col.field)}}"></div>'},
           {field: 'phoneNumber', displayName: 'Phone', width: '10%'},
           {field: 'billAmount', displayName: 'Balance Due', width: '10%'},
           {field: 'firstDateCreated', displayName: 'Date Charged',cellFilter: 'date:\'yyyy-MM-dd\'' , width: '10%'},
           {field: 'dateDue', displayName: 'Date Due', width: '10%'},
           {field: 'daysPastDue', displayName: 'Days Past Due', width: '10%'},
         ]
     };


       $scope.getClinicData = function(filter) {
         //  console.log($scope.filter)
         ngGridSvc.getClinicData(filter)
         .then(function(res) {
            $scope.clinicData = res.data.reduce(function(data,patient){
               console.log("Patient",patient);
               return patient.bills.reduce(function(data, bill){
                  Object.assign(bill, patient);
                  data.push(bill)
                  console.log("Bill",bill);
                  return data;
               },data);
            },[]);
            console.log($scope.clinicData);
            return $scope.clinicData;
         })
      }




});//end controller
