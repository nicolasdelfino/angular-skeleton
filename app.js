(function(){
   'use strict';

   //app name and dependencies:

   var app = angular.module('ngApp', ['ngMaterial']);

   //config:
   //Available palettes: red, pink, purple, deep-purple, indigo, blue, light-blue,
   //cyan, teal, green, light-green, lime, yellow, amber, orange, deep-orange, brown, grey, blue-grey

   app.config(function($mdThemingProvider) {
      $mdThemingProvider.theme('default')
      .primaryPalette('yellow')
      .accentPalette('orange');
    });

    //main controller with scope and http:

    app.controller('appController', ['$scope', '$http', function($scope, $http){

        console.log("controller init")


    }]);

})();
