import Controller from '@ember/controller';
import RSVP from 'rsvp';
import { later } from '@ember/runloop';
//import DS from 'ember-data';

export default Controller.extend({
  actions: {
    editPost(post, event) {
      event.preventDefault();

      post.save().then(() => {
        return new Promise(resolve => setTimeout(() => resolve(), 1000));
      }).then(() => this.transitionToRoute('post', post.id));


    },

    editEvent(){
  return new RSVP.Promise((resolve) => {
    later(() => {
      resolve();

    }, 2000);

  });

}
  }
});
