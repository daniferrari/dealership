import DS from 'ember-data';
//import ENV from '../config/environment';

export default DS.RESTAdapter.extend({
  host: 'http://localhost:8081/api',
  headers: {
    "Accept": "application/json"
  }
});
