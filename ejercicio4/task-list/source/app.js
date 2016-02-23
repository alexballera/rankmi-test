import angular from 'angular'
import components from './components'
import services from './services'
import partials from './partials'
import routes from './config/routes'

// Creo un modulo y le indico los modulos de los que depende
angular.module('App', [
  'App.components',
  'App.partialsPrecompile',
  'App.services',
  'App.routes'
])

// Instancia el modulo App
angular.bootstrap(document.body, ['App'])
