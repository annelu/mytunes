window.MyTunes = window.MyTunes || {};
window.MyTunes.Views = window.MyTunes.Views || {};

MyTunes.Views.PlaylistEntryView = Backbone.View.extend({
  tagName: 'div',
  template: _.template('<%= name %>'),
  initialize: function(){
  },

  events: {
    'click': function(){
      this.model.display();
    }
  },

  render: function() {
    this.$el.html(this.template(this.model.attributes));
    return this.$el;
  }

});