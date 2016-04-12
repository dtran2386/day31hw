module.exports = Backbone.View.extend({
    initialize: function () {
        this.render();
        $('#content').html(this.el);
//        this.model.on('change', this.render, this);
    },
    render: function () {
        this.el.innerHTML = '<h1>New food: <input type="text"></h1>';
    },
    events: {
        'keydown': 'keyAction',
    },
    keyAction: function(e) {
    if (e.which === 13) {
      this.collection.add({text: this.$el.val()});
        }
    } 
});