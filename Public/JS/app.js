angular.module('billingsimplified', ["ui.router"]).config(function($stateProvider, $urlRouterProvider){
  $stateProvider
  .state('login', {
    url: '/login',
    templateUrl: './Views/login.html',
    controller: './contollers/login.contoller.js'
  })
  .state('adminBilling', {
    url:'/adminBilling',
    templateUrl: "./Views/billingAdmin.html"
  })
  .state('staffBilling', {
    url: "/staffBilling",
    templateUrl:"/Views/billingStaff.html"
  })
  .state('practiceAdmin', {
    url:"/practiceAdmin",
    templateUrl: "/Views/practiceAdmin.html"
  })
  .state('practiceStaff', {
    url: "/practiceStaff",
    templateUrl: "/Views/practiceStaff.html"
  })

})
