export default function(ngComponent) {
  ngComponent.controller('taskListController', TaskListController)

  function TaskListController($scope, taskListFactory) {
    $scope.tareas = taskListFactory.getAll().tasks
    $scope.tarea = {name: "", done: false, comments: []}

    $scope.addTask = function(){
      if(!$scope.tarea.name == ""){
        taskListFactory.create($scope.tarea)
        $scope.tarea.name = ""
        $scope.tareas = taskListFactory.getAll().tasks
      }
    }
    $scope.checkTask = function(key){
      var task = taskListFactory.changeStatus(key);
      $scope.tareas = taskListFactory.getAll().tasks
    }
  }
}
