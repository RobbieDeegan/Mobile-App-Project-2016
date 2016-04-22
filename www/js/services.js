angular.module('starter.services', [])

.factory('Task', function() {
  
  var data = {
    tasks: [
    ]
  };

  function addTask(title) {
    data.tasks.push({title:title, added: new Date()});
 }
    
  return { // returning all values set in the factory and controllers
    data: data
    , addTask: addTask
  };
 
});
