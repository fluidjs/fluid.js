var createElement = require("./_impl/createElement.js");

var newUiElement = require("./_impl/uiElementFactory.js");


module.exports = {
    find: function(){
        return {
            byId: function (id) {
                return newUiElement(document.getElementById(id));
            },
            body: function () {
                return newUiElement(document.body);
            },
            all: function(selector) {
                // convert to normal array
                var elementList = [].slice.call(document.querySelectorAll(selector));
                return elementList.map(newUiElement);
            }
        }
    },
    afterInit: function (callback) {
        if (document.readyState !== "loading" ) {
            callback();
        } else {
            document.addEventListener("DOMContentLoaded", callback);
        }
    },
    createElement: createElement
};