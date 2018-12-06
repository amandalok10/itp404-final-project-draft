import config from './config/environment';
import Ember from 'ember';
//import EmberRouter from '@ember/routing/router';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});


Router.map(function() {
    this.route('post', { path: '/event/:id' });
    this.route('create', { path: '/event/new' });
    this.route('edit', { path: '/event/:id/edit' });
    this.route('map');
    this.route('about');
    this.route('loaderror', function(){
      this.route('loaderr');

  });
});

export default Router;
