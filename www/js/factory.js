//Factory para acessar os dados da API
app.factory('apiFactory', function($http) {

var apiFactory = {};

apiFactory.apiDados = function(){

  return $http({
        //url: 'js/moviesdataset.json',
        url:"https://cdn.cubos.io/downloads/moviesdataset.json",
        method:'GET'
  });

};

 return apiFactory;

});
