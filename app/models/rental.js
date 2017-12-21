import DS from 'ember-data';

export default DS.Model.extend({
    price: DS.attr(),
    name: DS.attr(),
    brand: DS.attr(),
    photo: DS.attr(),
});
