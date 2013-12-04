// SongQueue.js - Defines a backbone model class for the song queue.
window.MyTunes = window.MyTunes || {};
window.MyTunes.Collections = window.MyTunes.Collections || {};

MyTunes.Collections.SongQueue = MyTunes.Collections.Songs.extend({

  initialize: function(){
    this.on('add', this._enqueue, this);
    this.on('ended', this.playNext, this);
    this.on('dequeue', this._dequeue, this);
  },
  _enqueue: function(){
    if (this.length === 1) {
      this.playFirst();
    }
  },
  playFirst: function(){
    this.at(0).play();
  },
  _dequeue: function(song){
    this.remove(song);
  },
  playNext: function(){
    if (this.length >= 1) {
      this._dequeue();
      if (this.length > 0) {
        this.playFirst();
      }
    }
  }
});
