(function($) {


    setInterval(function() {
        replaceFloatyBall("img[src*='/aborted.png']", "aborted");
        replaceFloatyBall("img[src*='/blue.png']", "success");
        replaceFloatyBall("img[src*='/red.png']", "failure");
        replaceFloatyBall("img[src*='/yellow.png']", "warning");
        replaceFloatyBall("img[src*='/grey.png']", "aborted");
        replaceFloatyBall("img[src*='/nobuilt.png']", "notbuilt");
        replaceFloatyBall("img[src*='/disabled.png']", "notbuilt");
    }, 10);



    // Replace the floaty ball with a Doony balls, slightly modified.
    var replaceFloatyBall = function(selector, type) {
        $(selector).each(function() {
            var wrapper = document.createElement('div');
            wrapper.className = 'doony-circle doony-circle-' + type;
            wrapper.style.display = 'inline-block';
            var dimension;
            if (this.classList.contains("icon-lg")) {
                // an overly large ball is scary
                dimension = this.getAttribute('width') * 0.5 + 8;
                wrapper.style.marginRight = "15px";
                wrapper.style.verticalAlign = "middle";

            } else if (this.getAttribute('width') == "24") {
                // an overly large ball is scary
                dimension = this.getAttribute('width') * 0.5 + 8;
                wrapper.style.marginRight = "15px";
                wrapper.style.verticalAlign = "middle";
            // XXX hack, this is for the main page job list
            } else if (this.classList.contains("icon32x32")) {
                dimension = 24;
                wrapper.style.marginTop = "4px";
                wrapper.style.marginLeft = "4px";
            } else {
                dimension = this.getAttribute('width') || 12;
            }
            $(wrapper).css('width', dimension);
            $(wrapper).css('height', dimension);

            $(this).after(wrapper).remove();
        });
    };
})(jQuery);
