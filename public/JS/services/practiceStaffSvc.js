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

        this.submitBill = function(data, patientInfo) {
            data.patientName = patientInfo.patientName;
            data.patientId = patientInfo.id;
            console.log(data);
            return $http({
                method: 'POST',
                url: '/create/bill',
                data: data
            }).then(function(response) {
                return response;
            });
        };

        this.addToBillArray = function(patientInfo) {
            console.log("patient id", patientInfo.data.patientId);
            return $http({
                method: 'PUT',
                url: '/update/patient/' + patientInfo.data.patientId,
                data: patientInfo.data
            }).then(function(response) {
                console.log("so many console logs", response);
                return response;
            });
        };

        this.addToPatientArray = function(addPatient) {
            return $http({
                method: "PUT",
                url: '/updateClinic/patientArray/' + addPatient,
                data: addPatient
            }).then(function(response) {
                return response.data;
            })
        }

    });
