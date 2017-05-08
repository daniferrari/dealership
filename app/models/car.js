import DS from 'ember-data';

export default DS.Model.extend({
  plate: DS.attr(),
  manufacturer: DS.attr(),
  model: DS.attr(),
  color: DS.attr(),
  dealershipId: DS.belongsTo('dealership'),
  newOrUsed: DS.attr()
});
