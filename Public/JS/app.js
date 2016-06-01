angular.module("app", ['ui.router', 'ngGrid'])
    .config(function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/login');

        $stateProvider
            .state('login', {
                url: "/login",
                templateUrl: 'Views/login.html',
                controller: 'loginCtrl'
            })
            .state('practiceStaff', {
                url: "/practiceStaff",
                templateUrl: 'Views/practiceStaff.html',
                controller: 'practiceStaffCtrl',
                resolve: {
                    user: function(loginSvc, $state) {
                        return loginSvc.getCurrentUser()
                            .then(function(response) {
                                console.log(response);
                                if (response.data.userType === "practiceStaff") {
                                    return response.data;
                                } else {
                                    $state.go('login');
                                }
                            })
                    }
                }
            })
            .state('practiceAdmin', {
                url: "/practiceAdmin",
                templateUrl: 'Views/practiceAdmin.html',
                controller: 'practiceAdminCtrl',
                resolve: {
                    user: function(loginSvc, $state) {
                        return loginSvc.getCurrentUser()
                            .then(function(response) {
                                console.log(response);
                                if (response.data.userType === "practiceAdmin") {
                                    return response.data;
                                } else {
                                    $state.go('login');
                                }
                            })
                    }
                }
            })
            .state('billingStaff', {
                url: "/billingStaff",
                templateUrl: 'Views/billingStaff.html',
                controller: 'billingStaffCtrl',
                resolve: {
                    user: function(loginSvc, $state) {
                        return loginSvc.getCurrentUser()
                            .then(function(response) {
                                console.log(response);
                                if (response.data.userType === "billingStaff") {
                                  console.log(response.data.userType);
                                    return response.data;
                                } else {
                                    $state.go('login');
                                }
                            })
                    }
                }
            })
            .state('billingAdmin', {
                url: "/billingAdmin",
                templateUrl: 'Views/billingAdmin.html',
                controller: 'billingAdminCtrl',
                resolve: {
                    user: function(loginSvc, $state) {
                        return loginSvc.getCurrentUser()
                            .then(function(response) {
                                console.log(response);
                                if (response.data.userType === "billingAdmin") {
                                    return response.data;
                                } else {
                                    $state.go('login');
                                }
                            })
                    }
                }
            });
    });
