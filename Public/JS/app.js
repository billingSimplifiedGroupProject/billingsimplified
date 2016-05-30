angular.module("app", ['ui.router'])
    .config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('login', {
                url: "/login",
                templateUrl: './Views/login.html',
                controller: 'loginCtrl'
            })
            .state('practiceStaff', {
                url: "/practiceStaff",
                templateUrl: './Views/practiceStaff.html',
                controller: 'practiceStaffCtrl'
            })
            .state('practiceAdmin', {
                url: "/practiceAdmin",
                templateUrl: './Views/practiceAdmin.html',
                controller: 'practiceAdminCtrl'
            })
            .state('billingStaff', {
                url: "/billingStaff",
                templateUrl: './Views/billingStaff.html',
                controller: 'billingStaffCtrl'
            })
            .state('billingAdmin', {
                url: "/billingAdmin",
                templateUrl: './Views/billingAdmin.html',
                controller: 'billingAdminCtrl'
            })
            $urlRouterProvider.otherwise('./login');
    });
