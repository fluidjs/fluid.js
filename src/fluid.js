var createElement = require("./_impl/createElement.js");
var newUiElement = require("./_impl/uiElement.js");
var finder = require("./_impl/finder.js");

var fluid = {

    find: function () {
        var finders = finder(document);
        finders.body = function () {
            return newUiElement(document.body);
        };
    },

    afterInit: function (callback) {
        if (document.readyState !== "loading") {
            callback();
        } else {
            document.addEventListener("DOMContentLoaded", callback);
        }
    },

    createElement: createElement
};

module.exports = fluid;


