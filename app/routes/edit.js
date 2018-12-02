import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    return this.store.findAll('post');
  },
  model(params) {
    return this.store.findRecord('post', params.id);
  }
});
