/**
 * Created by Student on 2017/4/29.
 */
$(function () {

        var R=Math.floor(Math.random()*255);
        var G=Math.floor(Math.random()*255);
        var B=Math.floor(Math.random()*255);
        console.log(R,G,B);
     $('.person-img p').hover(function () {
          $(this).css('color','rgb('+R+','+G+','+B+')');
     },function () {
          $(this).css('color','rgb(0,0,0)');
    });
    $('.pull-right >li').hover(function () {
        $(this).css('background-color','red')
        // $('.pull-right >li a').not($(this)).css('color','#222')
    },function () {
        $('.pull-right >li ').css('background-color','#222')
    })


    $('.dropdown-menu a').click(function () {
        var href=$(this).attr('href');
        $("#tab-list a[href= '"+href+"']").tab('show');

    });
    
    $('.person-img div img').hover(function () {
       $(this).css('border','2px solid green')
        /*alert('111')*/
    },function () {
        $(this).css('border','0')
    })
    
    /*实现导航栏的轮播*/
    function moveup(){
        $('.xunyicao-pics').stop().animate({'top':'-480px'},650,function () {
            $('.xunyicao-pics img').eq(0).appendTo($('.xunyicao-pics'));
            $('.xunyicao-pics').css('top','0');
        })
    }
    var timer=setInterval(moveup,1000);

    $('.xunyicao-imgs').hover(function () {
        clearInterval(timer)
    },function () {
        timer=setInterval(moveup,1000);
    })
    
})