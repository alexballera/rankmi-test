export default function(ngComponent) {
  ngComponent.controller('taskShowController', TaskShowController)

  function TaskShowController($scope, taskListFactory, $stateParams) {
    $scope.tarea = taskListFactory.get($stateParams.id)
  }
}
