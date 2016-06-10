angular.module("app").controller('billingAdminCtrl', function($scope, billingAdminService, toaster, chartService) {
    $scope.clinicAdded = true; //this keeps the "create new user for clinic" div hidden until a new clinic is added
    $scope.addNewStaff = true; //
    $scope.showAddNewStaff = function() {
        $scope.addNewStaff = !$scope.addNewStaff;
    }

    // Get currentMDY and sixDaysPrevMDY for daily and weekly charts and Wkly Range input date fields
	var makeCurrentDate = new Date();
	var sixDaysPrev = new Date();
	sixDaysPrev.setDate(sixDaysPrev.getDate() - 6);
	var getMDY = function(currentDate) {
		var dd = ('0' + currentDate.getDate()).slice(-2);			
		var mm = ('0' + (currentDate.getMonth() + 1) ).slice(-2);
		// return mm + "/" + dd + "/" + currentDate.getFullYear();
		// return currentDate.getFullYear() + "/" + mm + "/" + dd;
		return currentDate.getFullYear() + "-" + mm + "-" + dd;
	};
	$scope.currentMDY = getMDY(makeCurrentDate);
	$scope.sixDaysPrevMDY = getMDY(sixDaysPrev);
	console.log($scope.currentMDY);

	// Wkly Range button toggles weekly range - two input date fields
	$scope.wklyRangeIsVisible = false;
	$scope.showHideWklyRange = function() {
		$scope.wklyRangeIsVisible = $scope.wklyRangeIsVisible ? false : true;
	};

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
        billingAdminService.getPractices()
	        .then(function(response) {
	            $scope.practices = response.data;
	        })
    }
    getPractices()

    $scope.deletePractice = function(id) {
        if (confirm("Are you sure you want to delete this Practice from the database?")) {
            billingAdminService.deletePractice(id)
                .then(function(response) {
                    toaster.pop('success', "Successfully Deleted Practice");
                    getPractices();
                })

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

	$scope.submitPracticeData = function(practiceData, practiceId) {
		billingAdminService.submitPracticeData(practiceData, practiceId)
			.then(function(response) {
				toaster.pop('success', "Successfully Added Chart Data");
				return response;
			});
	};

	$scope.getDailyChartData = function(practiceId, date) {
		chartService.getDailyChartData(practiceId, date)
			.then(function(response) {
				$scope.dailyChartData = response;
			});
	};

	$scope.getWeeklyChartData = function(practiceId, startDate, endDate) {
		chartService.getWeeklyChartData(practiceId, startDate, endDate)
			.then(function(response) {
				console.log(response);
				$scope.weeklyChartData = response;
			});
	};

	$scope.getMonthlyChartData = function(practiceId) {
		chartService.getMonthlyChartData(practiceId)
			.then(function(response) {
				console.log(response);
				$scope.monthlyChartData = response;
			});
	};

});
