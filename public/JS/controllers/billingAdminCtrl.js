angular.module("app")
	.controller('billingAdminCtrl', function($scope, billingAdminService, chartService) {
	
		$scope.clinicAdded = false;

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
		
		$scope.createNewPractice = function(newPractice) {
			billingAdminService.createNewPractice(newPractice)
				.then(function(response) {
					$scope.practiceId = response._id;
					$scope.clinicAdded = true;
				});
		};

		$scope.getPractices = function() {
			billingAdminService.getPractices()
				.then(function(response) {
					$scope.practices = response.data;
					console.log(response);
				});
		}();

		$scope.createNewUser = function(newUser, practiceId) {
			billingAdminService.createNewUser(newUser, practiceId);
			$scope.newUser = "";
		};

		$scope.hidden = true;
		$scope.unhidden = function(practice) {
			$scope.hidden=!$scope.hidden;
			$scope.chosenClinic = practice;
		};

		$scope.submitPracticeData = function(practiceData, practiceId) {
			billingAdminService.submitPracticeData(practiceData, practiceId)
				.then(function(response) {
					console.log(response);
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
