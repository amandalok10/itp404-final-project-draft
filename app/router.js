import EmberRouter from '@ember/routing/router';
import config from './config/environment';
import Ember from 'ember';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
//   this.route('loaderror', function(){
//     this.route('map');
//
// });
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
