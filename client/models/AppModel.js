// AppModel.js - Defines a backbone model class for the whole app.
window.MyTunes = window.MyTunes || {};
window.MyTunes.Models = window.MyTunes.Models || {};

MyTunes.Models.AppModel = Backbone.Model.extend({

  initialize: function(params){
    this.set('currentSong', new MyTunes.Models.SongModel());
    this.set('playlists', new MyTunes.Collections.Playlists());
    var playlist = new MyTunes.Models.PlaylistModel({name: 'default'});
    this.set('songQueue', playlist.get('queue')); //set songqueue to be the first empty playlist in the playlist collection
    this.get('playlists').add(playlist); //add empty playlist to the playlist collection

    //this.set('songQueue', new MyTunes.Collections.SongQueue());

    /* Note that 'this' is passed as the third argument. That third argument is
    the context. The 'play' handler will always be bound to that context we pass in.
    In this example, we're binding it to the App. This is helpful because otherwise
    the 'this' we use that's actually in the funciton (this.set('currentSong', song)) would
    end up refering to the window. That's just what happens with all JS events. The handlers end up
    getting called from the window (unless we override it, as we do here). */
    this.get('playlists').on('display', function(playlist){
      this.set('songQueue', playlist.get('queue'));
    }, this);
    params.library.on('play', function(song){
      song.increasePlaycount();
      this.set('currentSong', song);
    }, this);
    params.library.on('enqueue', function(song){
      this.get('songQueue').add(song);
    }, this);
  }

});
