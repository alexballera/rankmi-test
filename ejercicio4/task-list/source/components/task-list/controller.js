export default function(ngComponent) {
  ngComponent.controller('taskListController', TaskListController)

  function TaskListController($scope, taskListFactory) {
    $scope.tareas = taskListFactory.getAll().tasks

    $scope.tarea = {name: "", status: "todo"}
    $scope.addTask = function(){
      taskListFactory.create($scope.tarea)
      $scope.tarea.name= ""
      $scope.tareas = taskListFactory.getAll().tasks
    }
  }
}
