module.exports = Backbone.Model.extend ({
    defaults: {
        Foods: [],
    },
    logFood: function (name, type) {
        var food = {
            name: name,
            type: type,
        };
    },
});