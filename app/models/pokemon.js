import Model from 'ember-data/model';
import DS from 'ember-data';
import Ember from 'ember';

export default Model.extend({
  name: DS.attr('string'),
  height: DS.attr('number'),
  weight: DS.attr('number'),
  sprites: DS.attr(),

  avatarUrl: Ember.computed('sprites', function() {
    return this.get('sprites.front_shiny');
  })
});
