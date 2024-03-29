// SongQueueEntryView.js - Defines a backbone view class for the song queue entries.
window.MyTunes = window.MyTunes || {};
window.MyTunes.Views = window.MyTunes.Views || {};

MyTunes.Views.SongQueueEntryView = Backbone.View.extend({
  tagName: "tr",
  template: _.template('<td>(<%= artist %>)</td><td><%= title %></td>'),
  initialize: function(){
    this.on('change', function(){
      this.render();
    }, this);
  },

  events: {
    'click td': function(){
      this.model.dequeue();
    }
  },

  render: function() {
    return this.$el.html(this.template(this.model.attributes));
  }
});
