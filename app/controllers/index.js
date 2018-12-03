import Controller from '@ember/controller';
import { isEqual } from '@ember/utils';
import EmberObject from '@ember/object';




export default Controller.extend({



  actions: {
    // refreshEvent(post, model){
    //
    //   //console.log(post.location);
    //   // var array = post.toArray();
    //   //
    //   // console.log("im gonna refresh u");
    //   // var count=this.get('model.length');
    //   // console.log(count);
    //   //
    //   // console.log(this.get('post.location'));
    //   // console.log(this.get('model.location'));
    //   // for (var i=0; i< count; i++){
    //   //   if(array === post.location);
    //   //   console.log(i);
    //   // }
    //   //
    //   // model = this.get('model');
    //   // var count=this.get('model.length');
    //   //
    //   // model.forEach(function(post){
    //   //
    //   //   for (var i=0; i<count; i++){
    //   //     console.log(post.index('home'));
    //   //     //if(post.get('location') === post.index(i))
    //   //   }
    //   //   console.log(post.get('location'))
    //   //
    //   // },model);
    //
    //
    // },



    deletePost(post) {
      let confirmed = window.confirm(
        'Are you sure you want to delete this event?'
      );

      if (confirmed) {
        post.destroyRecord().then(() => {
          this.transitionToRoute('index');
        });
      }
    }


  }
});
