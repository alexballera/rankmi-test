export default function(ngComponent) {
  ngComponent.controller('taskShowController', TaskShowController)

  function TaskShowController($scope, taskListFactory, $stateParams) {
    $scope.tarea = taskListFactory.get($stateParams.id)
    $scope.comments = taskListFactory.getAllComments($stateParams.id)
    $scope.comment = {text: ""}

    $scope.addComment = function(){
      if(!$scope.comment.text == ""){
        taskListFactory.addComment($stateParams.id, $scope.comment)
        $scope.comment.text = ""
        $scope.tarea = taskListFactory.get($stateParams.id)
        $scope.comments = taskListFactory.getAllComments($stateParams.id)
      }
    }
  }
}
