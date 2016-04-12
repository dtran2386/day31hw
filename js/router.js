var MainView = require('./views/main-page');
var FoodView = require('./views/foods');

module.exports = Backbone.Router.extend({
    initialize: function (input) {
        this.contentView = null;
    },

    routes: {
        'main': 'mainPage',
        'foods/:type': 'showFood',
    },
    
    mainPage: function () {
        console.log('main page');
        if (this.contentView !== null) {
            this.contentView.remove();
            this.contentView = null;
        }

        // See notes from above.
        this.contentView = new MainView();
        this.contentView.render();
        $('#content').html(this.contentView.el.innerHTML);
    },

    showFood: function (type) {
        // TODO: delete existing view.
        console.log('show food');
        if (this.contentView !== null) {
            this.contentView.remove();
            this.contentView = null;
        }

        // Create a new view without giving it an `el` means that it'll render
        // in a new div element. From the backbone docs (http://backbonejs.org/#View-el):
        //
        // this.el can be resolved from a DOM selector string or an Element; otherwise 
        // it will be created from the view's tagName, className, id and attributes 
        // properties. If none are set, this.el is an empty div, which is often just fine.
        this.contentView = new FoodView();
        this.contentView.render();
        // Replace the current content of the #content element with the content of the
        // view's own element. Basically take what you rendered in the view and make it
        // visibile in the DOM.
        document.getElementById('content').innerHTML = this.contentView.el.innerHTML;
    },

});