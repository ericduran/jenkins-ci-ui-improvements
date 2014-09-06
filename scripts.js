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
            
            if (this.classList.contains("icon-xlg")) {
                // an overly large ball is scary
                dimension = 30;
                wrapper.style.marginRight = "15px";
                wrapper.style.verticalAlign = "bottom";

            } else if (this.classList.contains("icon-lg")) {
                // an overly large ball is scary
                dimension = 24;
                wrapper.style.marginRight = "15px";
                wrapper.style.verticalAlign = "middle";
            // XXX hack, this is for the main page job list
        	}
            else {
                dimension = this.getAttribute('width') || 12;
            }
            $(wrapper).css('width', dimension);
            $(wrapper).css('height', dimension);

            $(this).after(wrapper).remove();
        });
    };

    $('#jenkins-head-icon').attr('src', 'http://ericduran.github.io/jenkins-ci-ui-improvements/imgs/headshot.png');


})(jQuery);
