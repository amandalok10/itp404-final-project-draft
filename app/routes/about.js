import Route from '@ember/routing/route';

export default Route.extend({
  title: 'FAQ - Carpool',

  model() {
    return this.store.findAll('post');
  }

});
