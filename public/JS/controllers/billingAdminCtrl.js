angular.module("app").controller('billingAdminCtrl', function($scope, billingAdminService, toaster) {
    $scope.clinicAdded = true; //this keeps the "create new user for clinic" div hidden until a new clinic is added
    $scope.addNewStaff = true; //
    $scope.showAddNewStaff = function() {
        $scope.addNewStaff = !$scope.addNewStaff;
    }

    // ****** PRACTICE CRUD ******
    $scope.createNewPractice = function(newPractice) {
        billingAdminService.createNewPractice(newPractice)
            .then(function(response) {
                $scope.newPractice = "";
                $scope.practiceId = response._id;
                $scope.practiceName = response.name;
                $scope.clinicAdded = true;
                toaster.pop('success', "Successfully Created " + response.name);
                getPractices()
            })
    }
    var getPractices = function() {
        billingAdminService.getPractices().then(function(response) {
            $scope.practices = response.data;
        })
    }
    getPractices()

    $scope.deletePractice = function(id) {
        if (confirm("Are you sure you want to delete this Practice from the database?")) {
            billingAdminService.deletePractice(id)
            toaster.pop('success', "Successfully Deleted Practice");
        }

    }
    $scope.createNewUser = function(newUser, practiceId) {
        billingAdminService.createNewUser(newUser, practiceId)
            .then(function(response) {
                toaster.pop('success', "Successfully Created " + response.data.firstName + " " + response.data.lastName);
                console.log("new User", response);
            })
        $scope.newUser = "";
    }
//ssldkf
    $scope.hidden = true;
    $scope.unhidden = function(practice) {
        $scope.hidden = !$scope.hidden;
        $scope.chosenClinic = practice;
        $scope.praxId = practice._id;
    }

    $scope.submitChart = function(practiceChart, id) {
        billingAdminService.submitChart(practiceChart, id).then(function(response) {
            return response;
            console.log(response);
            console.log();
        })
    }
});
