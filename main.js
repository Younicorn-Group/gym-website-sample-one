var doc = jQuery(document);
doc.ready(function(){
    $('.navbar-nav').onePageNav({
        currentClass: 'active'
    });
    if($(window).scrollTop()<200)
    {
        $('.navbar-nav').addClass('navbar-nav-bg');
    }
    $(window).scroll(function(){
        var top = $(window).scrollTop();
        if(top>=300)
        {
            $('header').addClass('overlay');
            $('.navbar-nav').removeClass('navbar-nav-bg');
        }
        else if($('header').hasClass('overlay'))
        {
            $('header').removeClass('overlay');
        }
        else
        {
            $('.navbar-nav').addClass('navbar-nav-bg');
	    }
    });
});