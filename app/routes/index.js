import Route from '@ember/routing/route';

export default Route.extend({
  title: 'Carpool',


  model() {

    return this.store.findAll('post');

  }
});
