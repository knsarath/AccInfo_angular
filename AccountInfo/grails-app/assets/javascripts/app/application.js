var myapp = angular.module('accountApp',['ngRoute','ngAnimate']);

myapp.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
            when('/home', {
                templateUrl: 'assets/partials/home.html',
                //controller: 'homeController'
            }).
            when('/List', {
                templateUrl: 'assets/partials/list.html',
                controller: 'listAccountsController'
            }).
            when('/addnew', {
                templateUrl: 'assets/partials/addmenu.html',
               // controller: 'createEventController'
            }).
            when('/addweb', {
                templateUrl: 'assets/partials/create_web.html',
                controller: 'createWebController'
            }).        
            when('/myEvents/:eventId', {
                templateUrl: 'assets/partials/event-form.html',
               // controller: 'editEventController'
            }).
            otherwise({
                redirectTo: function(routeParams, currentPath) {
                    if(currentPath === '/') {
                        return '/home'
                    }
                    return '/List';
                }
            });
    }]);
