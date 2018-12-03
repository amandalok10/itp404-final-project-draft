import Component from '@ember/component';

export default Component.extend({
  actions: {
    refreshMatches(post) {
      console.log(post); 
      alert(this.get('post'));


      // console.log(this.get(post))
      //
      // var count=this.get('model.length')
      // count = count - 1
      // for(var i=0; i<count; i++){
      //   if(this.get(model[i])===this.get(post.location)){
  //         this.toggleProperty('match');
  //       }
  //     }
  //
     }
},
});
