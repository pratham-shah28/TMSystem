//loginService.js
var app = angular.module('myApp');
  
  app.factory('LoginService', function() {
    var admin = 'tm@gmail.com';
    var pass = 'password';
    var isAuthenticated = false;
    
    return {
      login : function(username, password) {
        isAuthenticated = username === admin && password === pass;
        return isAuthenticated;
      },
      isAuthenticated : function() {
        return isAuthenticated;
      }
    };
    
  });