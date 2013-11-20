function Social () {

    this.like = function (){
      console.log('Like!');
    };

    this.share = function ( friendName ){
      console.log('Sharing '+ this.get('title') +' with '+ friendName);
    };
}