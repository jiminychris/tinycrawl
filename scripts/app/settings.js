define(["jquery"], function($) {
    var width = 86;
    var height = 29;
    var margin = 1;
    var menuHeight = 7;
    var pixelsPerMeter = 10;
    var metersPerPixel = 1/pixelsPerMeter;
    var scale = Math.floor($(window).width()/(width+margin*2));//*.8;
    window.addEventListener("resize", function() {
        window.requestAnimationFrame(function() {
            scale = Math.floor($(window).width()/(width+margin*2));
        });
    });
    return {
        "width": function() { return width*scale; },
        "height": function() { return height*scale; },
        "margin": function() { return margin*scale; },
        "menuHeight": function() { return menuHeight*scale; },
        "pixelsPerMeter": function() { return pixelsPerMeter; },
        "metersPerPixel": function() { return metersPerPixel; },
        //"scale": function() { return scale; }
    }
});