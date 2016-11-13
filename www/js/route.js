// Cubos APP - Seleção de Vaga
//Autor: Anderson Farias
//Contato: andersonjfarias@yahoo.com.br

//Inicia a aplicação com os devidos módulos
var app = angular.module('starter', ['ionic','ionic.rating'])




//Configuração inicial

app.config(['$httpProvider', function($httpProvider) {

        
        $httpProvider.defaults.headers.common = {};
        $httpProvider.defaults.headers.post = {};
        $httpProvider.defaults.headers.put = {};
        $httpProvider.defaults.headers.patch = {};
        
        $httpProvider.defaults.useXDomain = true;
        delete $httpProvider.defaults.headers.common['X-Requested-With']; 
      }
])


app.config(function($stateProvider,$urlRouterProvider,$ionicConfigProvider){

  //Posição da tab para bottom
  $ionicConfigProvider.tabs.position('top');
  
  //Rotas
  $stateProvider
  
   .state('usuarios_listar', {
    url:'/users',
    controller: 'userCtrl',
    templateUrl:'templates/usuarios_listar.html'  
  })

  .state('comentarios', {
    url:'/comentarios',
    controller: 'userCtrl',
    templateUrl:'templates/comentarios.html'  
  })

  .state('autor', {
    url:'/autor',
    controller: 'autorCtrl',
    templateUrl:'templates/autor.html'  
  })
  
  $urlRouterProvider.otherwise('/users');

})

app.controller('comentariosCtrl', function(apiFactory,$http,$state, $scope,$location,$ionicPopup,$timeout){

console.log("comentarios");

})



.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

