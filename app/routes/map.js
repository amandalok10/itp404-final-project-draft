import Route from '@ember/routing/route';

export default Route.extend({
  title: 'Map - Carpool',
  model() {
    return this.store.findAll('post');
  }
});
