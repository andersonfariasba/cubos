// Cubos APP - Seleção de Vaga
//Autor: Anderson Farias
//Contato: andersonjfarias@yahoo.com.br

//Inicia a aplicação com os devidos módulos
var app = angular.module('starter', ['ionic','ionic.rating'])

//Configuração inicial
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

  .state('autor', {
    url:'/autor',
    controller: 'autorCtrl',
    templateUrl:'templates/autor.html'  
  })
  
  $urlRouterProvider.otherwise('/users');

})


//Factory para acessar os dados da API
app.factory('apiFactory', function($http) {

var apiFactory = {};

apiFactory.apiDados = function(){

  return $http({
        url: 'js/moviesdataset.json',
        //url:"https://cdn.cubos.io/downloads/moviesdataset.json",
        method:'GET'
  });

};

 return apiFactory;

});



//Controle de aplicação
app.controller('userCtrl', function(apiFactory,$http,$state, $scope,$location,$ionicPopup,$timeout){

 
  //Retorna os dados da API
  apiFactory.apiDados().success(function(data){

    $scope.users = data.users;
    $scope.movies = data.movies;
    $scope.ratings = data.ratings;

  })
 

  //Caso selecione o filme para avaliação
  $scope.mostrarAvaliacao = function(item){

     //Pega os itens da lista
     $scope.item = { title: item.title, genres: item.genres}
     
     //Inicia algumas variáveis
     $scope.data = {}
     $scope.soma_score = 0;
     $scope.qtd_score = 0;
     $scope.media = 0; 

   //Percorre a lista de ratings para buscar o filme selecionado
   angular.forEach($scope.ratings, function(value, key){

      //Se Id do filme for igual a do filme rating
      if(item.id==value.movie){
        //Soma Score
        $scope.qtd_score++;
        //Total Score
        $scope.soma_score = $scope.soma_score + value.score;

        console.log("Código:"+value.movie);
        console.log("Score:"+value.score);
      
      }

    })
   
    //Calcula uma média para atribuir score
    $scope.media = $scope.soma_score / $scope.qtd_score;
     
    console.log("Total Score = "+$scope.soma_score);
    console.log("Qtd = "+$scope.qtd_score);
    console.log("Média = "+$scope.media);

    $scope.rating = {};
    $scope.rating.rate = $scope.media;
    $scope.rating.max = 5;
    
    //Mostra os dados em um modal, chamando um template para os dados 
    var alert = $ionicPopup.alert({

      templateUrl:'templates/comentarios.html',
      scope:$scope

    });

    alert.then(function(res) {
         $location.path('users');
    });

}


})

//Controle de aplicação
app.controller('autorCtrl', function(apiFactory,$http,$state, $scope,$location,$ionicPopup,$timeout){

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
