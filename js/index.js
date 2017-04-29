/**
 * Created by Student on 2017/4/17.
 */
$(function () {
    $('.istop').click(function () {
       $('body').animate({
           scrollTop:0
       },900)
    })
    $(window).scroll(function () {
        var m=$(window).height();
      
        if($(window).scrollTop()>m){
              $('.istop').fadeIn();
        }else{
            $('.istop').fadeOut();
        }
    })
    $(window).trigger('scroll');
    /* console.log($('.istop'));*/
})
