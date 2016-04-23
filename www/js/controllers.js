angular.module('starter.controllers', [])

.controller('AddCtrl', function($scope, Task) {
    
  var data = {
  };
  
  function addTask() { // getting values from the tabs and setting them to be used in the factory
    Task.addTask(data.newTask);
    data.newTask = "";
  }
  
  $scope.data = data; // $scope used so it can be seen globally
  $scope.addTask = addTask; // setting value
    
})

.controller('ListCtrl', function($scope, Task) {
  $scope.data = Task.data;
})

.controller('SaveController', function($scope, Task)
{
    $scope.saveTask = function(v){
        window.localStorage.setItem('data', v);
    }
});
        