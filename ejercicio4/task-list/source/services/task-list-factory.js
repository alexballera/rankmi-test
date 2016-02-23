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
        window.localStorage.setItem("db", JSON.stringify(all))
      },
      remove(index) {
        var all = this.getAll()
        all.tasks.splice(index, 1)
        window.localStorage.setItem("db", JSON.stringify(all))
      },
      get(index) {
        var all = this.getAll()
        return all.tasks[index]
      },
      change_status(index, status) {
        var all = this.getAll()
        all.tasks[index].status = status
        window.localStorage.setItem("db", JSON.stringify(all))
      }
    }

    window.tasksList = Model
    return Model
  }
}
