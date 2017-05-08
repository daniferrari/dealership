import Ember from 'ember';

export default Ember.Route.extend({

  model() {
    return this.store.createRecord('dealership');
  },

  actions: {
  saveDealership(dealership){
      dealership.save().then(() => this.transitionTo('dealership'));
  }
}

});
