// SongQueue.js - Defines a backbone model class for the song queue.
window.MyTunes = window.MyTunes || {};
window.MyTunes.Collections = window.MyTunes.Collections || {};

MyTunes.Collections.SongQueue = MyTunes.Collections.Songs.extend({

  initialize: function(){
  	this.on('add', function(){
  		if (this.length === 1) {
        this.playFirst();
      }
  	});

    this.on('ended', function(song){
      this.remove(this.at(0));
      if (this.length !== 0) {
        this.playFirst();        
      }
    }, this);

    this.on('dequeue', function(song){
      this.remove(song);
    });

  },

  playFirst: function(){
  	this.at(0).play();
  }



});
