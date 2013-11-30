// SongQueueView.js - Defines a backbone view class for the song queue.
window.MyTunes = window.MyTunes || {};
window.MyTunes.Views = window.MyTunes.Views || {};

MyTunes.Views.SongQueueView = MyTunes.Views.SongQueueEntryView.extend({
  initialize: function(){
    this.collection.on('add', function(){
      this.render();
    }, this);
    this.collection.on('remove', function(){
      this.render();
    }, this);
  }
});
