angular.module("app", ['ui.router', 'ngGrid', 'toaster'])
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
                    practiceStaffAndClinic: function(loginSvc, practiceStaffService, $state, $q) {
                        var dfd = $q.defer();
                        return loginSvc.getCurrentUser()
                            .then(function(response) {
                                var currentUser = response;
                                console.log("resolve response", response);
                                if (response.data.userType === "practiceStaff") {
                                    practiceStaffService.getUsersPractice(response.data.practiceId)
                                        .then(function(response) {
                                            console.log(response);
                                            dfd.resolve({
                                                currentUser: currentUser.data,
                                                practice: response.data
                                            })
                                        })
                                        return dfd.promise;
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
                    practiceStaffAndClinic: function(loginSvc, practiceStaffService, $state, $q) {
                        var dfd = $q.defer();
                        return loginSvc.getCurrentUser()
                            .then(function(response) {
                                var currentUser = response;
                                console.log("resolve response", response);
                                if (response.data.userType === "practiceAdmin") {
                                    practiceStaffService.getUsersPractice(response.data.practiceId)
                                        .then(function(response) {
                                            console.log(response);
                                            dfd.resolve({
                                                currentUser: currentUser.data,
                                                practice: response.data
                                            })
                                        })
                                        return dfd.promise;
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
