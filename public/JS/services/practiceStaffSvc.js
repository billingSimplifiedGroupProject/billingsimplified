angular.module("app")
    .service("practiceStaffService", function($http) {

        this.getUsersPractice = function(id) {
            return $http({
                method: 'GET',
                url: '/get/practice/' + id
            }).then(function(response) {
                console.log("getUserPractice", response);
                return response;
            });
        };

        this.addPatient = function(patientInfo, practiceId) {
            console.log(patientInfo, practiceId);
            return $http({
                method: 'POST',
                url: '/create/patient',
                data: {
                    firstName: patientInfo.firstName,
                    lastName: patientInfo.lastName,
                    insurance: patientInfo.insurance,
                    email: patientInfo.email,
                    practiceId: practiceId
                }
            }).then(function(response) {
                return response;
            });
        };

    });
