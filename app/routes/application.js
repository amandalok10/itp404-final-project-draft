import Route from '@ember/routing/route';
//import { makeArray } from '@ember/array';
//import Ember from 'ember';


export default Route.extend({
  title: function(tokens) {
  //tokens = Ember.makeArray(tokens);
  tokens.unshift('Carpool');
  return tokens.reverse().join(' - ');
 }
});
