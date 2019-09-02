$(document).ready(function(){
    $(".menu__item").click(function(){
        var category=$(this).attr('id');
        // alert(category);
        if(category=='all'){
            $('.filter').addClass('hide');
            setTimeout(function(){
                $('.filter').removeClass('hide');
            },300);
        }
        else{
            $('.filter').addClass('hide');
            setTimeout(function(){
                $('.'+category).removeClass('hide');
            },300);
            // $('.products_portfolio').css('justify-content','space-between');
        }
        // var value = $(this).attr("data-filter");
        // $(".menu .menu__item").click(function(){
        //     $(this).addClass("active").siblings().removeClass("active");
        // })
        // if (value =="all"){
        //     $(".products_portfolio").show("1000");
        // }
        // else
        //     {
        //         $(".products_portfolio .filter").not("."+value).hide("1000");
        //         $(".products_portfolio .filter").filter("."+value).show("1000");
        //     }
        $(".menu .menu__item").click(function(){
            $(this).addClass("active").siblings().removeClass("active");
        })
    })
})