var app = angular.module('mainApp', []);

app.controller('MainCtrl', function($scope, $http) {
      var urls = $http.get('http://private-d32f65-sift2.apiary-mock.com/searchfiles').success(function(urlData){
          $scope.urls = urlData;
          console.log(urlData);
      });
});
