var newUiElement = require("./_impl/uiElement.js");

function nodeListToArray(rootElement) {
    return [].slice.call(rootElement.querySelectorAll(selector));
}

module.exports = function(rootElement){
    return {
        byId: function (id) {
            return newUiElement(rootElement.getElementById(id));
        },
        all: function (selector) {
            // convert to normal array
            var elementList = nodeListToArray(rootElement.querySelectorAll(selector));
            return elementList.map(newUiElement);
        },
        each: function(callback) {
            var elementList = nodeListToArray(rootElement.querySelectorAll(selector));
            elementList.map(newUiElement).forEach(callback);
        }
    }
};