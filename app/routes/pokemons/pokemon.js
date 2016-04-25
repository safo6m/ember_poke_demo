import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('pokemon', params.id);
  },

  actions: {
    childNameClicked(pokemonName) {
      alert(`${pokemonName} from parent`);
    }
  }
});
