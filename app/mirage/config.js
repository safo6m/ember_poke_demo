import config from '../config/environment';

export default function() {
  this.urlPrefix = config.host;
  this.namespace = config.apiEndpoint;

  this.get('/pokemon', function() {
    return {"count":811,"next":"http://pokeapi.co/api/v2/pokemon/?limit=20&offset=20","previous":null,"results":[{"name":"bulbasaur","url":"http://pokeapi.co/api/v2/pokemon/1/"},{"name":"ivysaur","url":"http://pokeapi.co/api/v2/pokemon/2/"},{"name":"venusaur","url":"http://pokeapi.co/api/v2/pokemon/3/"},{"name":"charmander","url":"http://pokeapi.co/api/v2/pokemon/4/"},{"name":"charmeleon","url":"http://pokeapi.co/api/v2/pokemon/5/"},{"name":"charizard","url":"http://pokeapi.co/api/v2/pokemon/6/"},{"name":"squirtle","url":"http://pokeapi.co/api/v2/pokemon/7/"},{"name":"wartortle","url":"http://pokeapi.co/api/v2/pokemon/8/"},{"name":"blastoise","url":"http://pokeapi.co/api/v2/pokemon/9/"},{"name":"caterpie","url":"http://pokeapi.co/api/v2/pokemon/10/"},{"name":"metapod","url":"http://pokeapi.co/api/v2/pokemon/11/"},{"name":"butterfree","url":"http://pokeapi.co/api/v2/pokemon/12/"},{"name":"weedle","url":"http://pokeapi.co/api/v2/pokemon/13/"},{"name":"kakuna","url":"http://pokeapi.co/api/v2/pokemon/14/"},{"name":"beedrill","url":"http://pokeapi.co/api/v2/pokemon/15/"},{"name":"pidgey","url":"http://pokeapi.co/api/v2/pokemon/16/"},{"name":"pidgeotto","url":"http://pokeapi.co/api/v2/pokemon/17/"},{"name":"pidgeot","url":"http://pokeapi.co/api/v2/pokemon/18/"},{"name":"rattata","url":"http://pokeapi.co/api/v2/pokemon/19/"},{"name":"raticate","url":"http://pokeapi.co/api/v2/pokemon/20/"}]};
  });

  this.get('pokemon/:pokemon_id', function(db, request) {
    const id = request.params.pokemon_id;

    const pokemonObj = db.pokemons.find(id);
    pokemonObj.id = id;

    return pokemonObj;
  });
}
