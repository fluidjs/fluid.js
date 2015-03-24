module.exports = function(fluid) {
    if ( typeof define === "function" && define.amd ) {
        define( "fluid", [], function() {
            return fluid;
        });
    }
}

