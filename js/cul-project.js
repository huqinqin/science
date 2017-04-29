/**
 * Created by Student on 2017/4/17.
 */
$(function () {
    $('.pull-right  li').hover(function () {
            $(this).css('background-color','red');
           /* $( $('.container .nav li')).not($(this)).css('background-color','#222')*/
        },function () {
            $(this).css('background-color','#222');
        }
    );
    /*鼠标移动的时候会有相应的大图显示*/
    $('.picc').eq(0).eq(4).remove();
   $('.picc div').hover(function () {
         $('<div class="show1"><p>智者，总是先人一步！有先见之明的人是未来的主人!智慧互联，一切尽在掌握！创领品质未来。</p></div>')
             .appendTo('.picc');

      /* console.log($('.picc div'),$(this).index());
       console.log($('.show1'));*/
   },function () {
       $('.show1').remove();
   });

    /*当鼠标移动的时候*/
    $('.picc div').mousemove(function (event) {
        $('.show1').not($('.show1').eq(0)).css({"top":event.clientY+20+'px','left':event.clientX+10+'px','z-index':1000});

    })

})