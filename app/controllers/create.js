import Controller from '@ember/controller';

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

        post.save().then(() => {
           this.transitionToRoute('index');
          //this.transitionToRoute('post', post.id);
        });
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
