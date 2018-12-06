//import Component from '@ember/component';
//import DS from 'ember-data';
import Ember from 'ember';


export default Ember.Component.extend( {
  tagName: 'button',
  buttonText: 'Submit',

  click(){

      this.set('buttonText', 'Submitting...');
      this.onClick().then(() => {
        this.set('buttonText', 'Submit');
      })
    }


});
