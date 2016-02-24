export default function(ngComponent) {
  ngComponent.factory('taskListFactory',TaskListFactory)

  function TaskListFactory($resource) {
    let Model = {
      getAll() {
        return JSON.parse(window.localStorage.getItem("db")) || { tasks: [] }
      },
      create(task) {
        var all = this.getAll()
        all.tasks.push(task)
        saveLocalStorage(all)
      },
      remove(index) {
        var all = this.getAll()
        all.tasks.splice(index, 1)
        saveLocalStorage(all)
      },
      get(index) {
        var all = this.getAll()
        return all.tasks[index]
      },
      changeStatus(index) {
        var all = this.getAll()
        all.tasks[index].done = !all.tasks[index].done
        saveLocalStorage(all)
      },
      addComment(index, comment) {
        var all = this.getAll()
        var task = all.tasks[index]
        console.log(task)
        task.comments.push(comment)
        saveLocalStorage(all) 
      },
      getAllComments(index){
        var task = this.get(index)
        return task.comments.reverse()
      }
    }
    function saveLocalStorage(all){
      window.localStorage.setItem("db", JSON.stringify(all))
    }

    window.tasksList = Model
    return Model
  }
}
