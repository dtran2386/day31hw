module.exports = Backbone.View.extend({
    initialize: function () {
        this.render();
        $('#content').html(this.el);
//        this.model.on('change', this.render, this);
    },
    render: function () {
        this.el.innerHTML = '<h1>List of food:</h1>';
    }
});