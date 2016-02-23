import angular from 'angular'

angular.module('App.components', [])

const components = angular.module('App.components')

// Add controller to the components module
require('./task-list/controller.js')(components);

export default components
