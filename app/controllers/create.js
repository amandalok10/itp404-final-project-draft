import Controller from '@ember/controller';
import RSVP from 'rsvp';
import { later } from '@ember/runloop';
import DS from 'ember-data';

export default Controller.extend({
  actions: {
      createPost(event) {
        event.preventDefault();

        let post = this.store.createRecord('post', {
          name: this.name,
          date: this.date,
          location: this.location,
          contact: this.contact,
        });

        post.validate().then(({ validations }) => {
          if (validations.get('isValid')) {
            post.save().then(() => {
               this.transitionToRoute('index');
              //this.transitionToRoute('post', post.id);
            });

          }
        })


      },
      saveEvent(){
    return new RSVP.Promise((resolve) => {
      later(() => {
        resolve();

      }, 2000);

    });

  }
    }
  });
