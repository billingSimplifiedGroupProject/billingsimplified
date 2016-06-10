angular.module("app")
	.controller('practiceAdminCtrl', function($scope, practiceAdminService, chartService) {

		$scope.getDailyChartData = function(practiceId) {
			chartService.getDailyChartData(practiceId)
				.then(function(response) {
					console.log(response);
					return response;
				});
		};

		$scope.getWeeklyChartData = function(practiceId) {
			chartService.getWeeklyChartData(practiceId)
				.then(function(response) {
					console.log(response);
					return response;
				});
		};

		$scope.getMonthlyChartData = function(practiceId) {
			chartService.getMonthlyChartData(practiceId)
				.then(function(response) {
					console.log(response);
					return response;
				});
		};

});