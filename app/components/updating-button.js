import Component from '@ember/component';
import DS from 'ember-data';
import Ember from 'ember';


export default Ember.Component.extend( {
  tagName: 'button',
  buttonText: 'Update',

  click(){

      this.set('buttonText', 'Updating...');
      this.onClick().then(() => {
        this.set('buttonText', 'Update');
      })
    }


});
