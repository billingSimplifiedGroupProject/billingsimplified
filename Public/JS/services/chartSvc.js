angular.module("app")
	.service("chartService", function($http) {

		this.getDailyChartData = function(practiceId, date) {
			return $http({
				method: 'GET',
				url: '/get/dailyChartData?practiceId=' + practiceId + '&&date=' + date
			}).then(function(response){
				return response;
			});
		};

		this.getWeeklyChartData = function(practiceId, startDate, endDate) {
			return $http({
				method: 'GET',
				url: '/get/weeklyChartData?practiceId=' + practiceId + '&&startDate=' + startDate + '&&endDate=' + endDate
			}).then(function(response){
				return response;
			});
		};

		this.getMonthlyChartData = function(practiceId) {
			return $http({
				method: 'GET',
				url: '/get/monthlyChartData'
			}).then(function(response){
				return response;
			});
		};

});