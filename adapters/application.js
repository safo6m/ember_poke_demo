import DS from 'ember-data';
import config from '../config/environment';

export default DS.RESTAdapter.extend({
  host: config.host,
  namespace: config.apiEndpoint,

  pathForType(type) {
    return type;
  }
});
