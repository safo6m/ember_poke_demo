import DS from 'ember-data';

export default DS.RESTSerializer.extend({
  normalizeResponse(store, primaryModelClass, payload, id, requestType) {
    if (id) {
      payload = {
        pokemon: payload
      };
    } else {
      payload = {
        pokemons: payload.results
      };

      payload.pokemons.forEach((item) => {
        item.id = item.url.split('/')[6];
        delete item.url;
      });
    }

    arguments[2] = payload;

    return this._super(...arguments);
  }
});
