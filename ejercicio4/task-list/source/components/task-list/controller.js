export default function(ngComponent) {
  ngComponent.controller('taskListController', TaskListController)

  function TaskListController($scope, taskListFactory) {
    $scope.tareas = "Hello from a controller router"
  }
}
