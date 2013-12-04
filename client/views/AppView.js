// AppView.js - Defines a backbone view class for the whole music app.
window.MyTunes = window.MyTunes || {};
window.MyTunes.Views = window.MyTunes.Views || {};

MyTunes.Views.AppView = Backbone.View.extend({

  initialize: function(params){
    this.playerView = new MyTunes.Views.PlayerView({model: this.model.get('currentSong')});
    this.libraryView = new MyTunes.Views.LibraryView({collection: this.model.get('library')});
    this.songqueueView = new MyTunes.Views.SongQueueView({collection: this.model.get('songQueue')});
    this.playlistView = new MyTunes.Views.PlaylistView({collection: this.model.get('playlists')});

    this.playlistView.render();

    this.model.on('change:currentSong', function(model){
      this.playerView.setSong(this.model.get('currentSong'));
    }, this);
    this.model.on('change:songQueue', function(songQueue){
      this.songqueueView.setQueue(this.model.get('songQueue'));
    }, this);
  },

  render: function(){
    return this.$el.html([
      this.playerView.$el,
      this.libraryView.$el,
      this.songqueueView.$el,
      this.playlistView.$el
    ]);
  }

});
