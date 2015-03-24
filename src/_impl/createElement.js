function createElement(htmlStructure) {
    var dummyElement = document.createElement("div");
    dummyElement.innerHTML = htmlStructure;

    return {
        'appendTo': function(ui) {
            ui._node.appendChild(dummyElement.firstChild);
        }
    }
}

module.exports = createElement;