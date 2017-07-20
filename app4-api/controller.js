
angular.module("app").controller("controller", function($scope, services) {
//This code gets the first 20-pokemon from the API.
//     $scope.getPokemon = function() {
//         $scope.poke = services.getPokemon().then(function(pokemon) {
//             $scope.kitkats = pokemon.data.results;
//             console.log($scope.kitkats)
           
//         })
//     }
//       $scope.getPokemon();
     //http://pokeapi.co/api/v2/pokemon/2/

    $scope.getData = function(katkat) {
        var kitkatkat = 'http://pokeapi.co/api/v2/pokemon/'+katkat+'/'
        $scope.pokeData = services.getData(kitkatkat).then(function(pikatchu) {
            $scope.rData = pikatchu.data;
            $scope.pHeight = pikatchu.data.height;
            $scope.pID = pikatchu.data.id;
            $scope.pWeight = pikatchu.data.weight;
            $scope.pName = pikatchu.data.name;
            $scope.picture = pikatchu.data.sprites.front_default;
            $scope.move1 = pikatchu.data.moves[0].move.name;
            $scope.move2 = pikatchu.data.moves[1].move.name;
            $scope.move3 = pikatchu.data.moves[2].move.name;
            $scope.move4 = pikatchu.data.moves[3].move.name;
            $scope.move5 = pikatchu.data.moves[4].move.name;
        });
        
    }

})

