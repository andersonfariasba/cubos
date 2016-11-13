
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