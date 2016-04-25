import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['pokemon-details'],

  density: Ember.computed('pokemon.height', 'pokemon.weight', function() {
    return this.get('pokemon.height') * this.get('pokemon.weight');
  }),

  actions: {
    onAvatarClick() {
      alert(`I'm ${this.get('pokemon.name')}`);
    }
  }
});
