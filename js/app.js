window.addEventListener('load', function () {
    var Log = require('./models/log');
    var MainPage = require('./views/main-page');
    var Foods = require('./views/foods');
    var Router = require('./router');
    console.log(Router);

    var router = new Router();
    Backbone.history.start();
    
    var log = new Log();
    
    var mainPage = new MainPage({
        el: document.getElementById('content'),
        model: log
    });
    
    var foods = new Foods({
        el: document.getElementById('content'),
        model: log
    });
});