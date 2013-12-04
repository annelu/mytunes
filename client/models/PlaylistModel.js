// SongQueue.js - Defines a backbone model class for the song queue.
window.MyTunes = window.MyTunes || {};
window.MyTunes.Models = window.MyTunes.Models || {};

MyTunes.Models.PlaylistModel = Backbone.Model.extend({
  initialize: function(input){
    this.set('queue', new MyTunes.Collections.SongQueue());
    this.set('name', input.name);
  },
  display: function(){
    this.trigger('display', this);
  }

});
