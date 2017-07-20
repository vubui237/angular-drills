angular.module("app").service("services",function($http) {
    //This code gets the first 20 pokemon
    // this.getPokemon = function() {
    //     return $http({
    //         method: "GET",
    //         url: "http://pokeapi.co/api/v2/pokemon/?limit=20"
    //     })
    // }

    this.getData = function(kitkatkat) {
        return $http({
            method: "GET",
            url: kitkatkat
        })
    }
})