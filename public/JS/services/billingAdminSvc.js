angular.module("app")
    .service("billingAdminService", function($http) {

        this.createNewUser = function(data, practiceId) {
            if (practiceId) {
                data.practiceId = practiceId;
            }
            console.log("service", data, practiceId);
            return $http({
                method: 'POST',
                url: '/create/user',
                data: data
            }).then(function(response) {
                console.log("service response", response);
                return response;
            });
        };
        this.createNewPractice = function(data) {
            return $http({
                method: 'POST',
                url: "/create/practice",
                data: {
                    name: data.name,
                    email: data.email,
                    phoneNumber: data.phoneNumber,
                    mailingAddress: data.mailingAddress,
                }
            }).then(function(response) {
                console.log("service", response);
                return response.data;
            });
        };
        this.getPractices = function(){
          return $http({
          method: "GET",
          url: "/get/practice"
        }).then(function(response){
          return response;
        });
      };

      this.deletePractice = function(id) {
          $http({
              method: "DELETE",
              url: '/delete/practice/' + id
          })
            .then(function(response) {
                console.log(response.data);
                return response;
            });
      };

      this.submitPracticeData = function(practiceData, id){
          practiceData.practiceId = id;
          return $http({
            method: 'POST',
            url: '/create/chartData',
            data: practiceData
          }).then(function(response){
            return response;
          });
      };

});
