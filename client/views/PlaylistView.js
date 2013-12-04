window.MyTunes = window.MyTunes || {};
window.MyTunes.Views = window.MyTunes.Views || {};

MyTunes.Views.PlaylistView = Backbone.View.extend({

  initialize: function(){
    this.collection.on('add', this.render, this);
  },

  events: {
    'click button': function(){
      this.createNewList();
    }
  },
 
  render: function(){
    this.$el.html('');
    this.$el.append('<button type="button">Create New Playlist</button>');
    this.$el.append(
      this.collection.map(function(playlist){
        return new MyTunes.Views.PlaylistEntryView({model: playlist}).render();
      })
    );
  },
  createNewList: function(){
    var newList = new MyTunes.Models.PlaylistModel({name: prompt('Enter your playlist name')});
    this.collection.add(newList);
  },

});