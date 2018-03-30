$(document).ready( function() {

	// Logo
	var $logo 	= $('#logo');
	 if (location.href.indexOf("#") != -1) {
        if(location.href.substr(location.href.indexOf("#"))!='#about'){
        	$logo.show();
        }
    }
    
	// Show logo 
	$('#tab-container .tab a').click(function() {
	  $logo.slideDown('slow');
	});
	// Hide logo
	$('#tab-about').click(function() {
	  $logo.slideUp('slow');
    });	
    
    // $('a').click(function() {
    //     var p = $('a').prev('ul')
    //     var lineheight = parseInt(p.css('line-height'))
    //     if (parseInt(p.css('height')) == lineheight*3) {
    //        p.css('height','auto');
    //        $(this).text('---------- View Less ----------')
    //     } else {
    //        p.css('height',lineheight*3+'px');
    //        $(this).text('---------- View More ----------')
    //     }
    // });


    $('.vm li a').click(function() {
        var p = $(this).prev('ul')
        var lineheight = parseInt(p.css('line-height'))
        if (parseInt(p.css('height')) == lineheight*3) {
           p.css('height','auto');
           $(this).text('---------- View Less ----------')
        } else {
           p.css('height',lineheight*3+'px');
           $(this).text('---------- View More ----------')
        }
    });

function animMeter(){
    $(".meter > span").each(function() {
                $(this)
                    .data("origWidth", $(this).width())
                    .width(0)
                    .animate({
                        width: $(this).data("origWidth")
                    }, 1200);
            });
}
animMeter();

      $('#tab-container').easytabs({
        animate			: true,
        updateHash		: true,
        transitionIn	: 'slideDown',
        transitionOut	: 'slideUp',
        animationSpeed	: 600,
        tabActiveClass	: 'active'}).bind('easytabs:midTransition', function(event, $clicked, $targetPanel){
            if($targetPanel.selector=='#resume'){
                    animMeter();
            }
        });
    });
