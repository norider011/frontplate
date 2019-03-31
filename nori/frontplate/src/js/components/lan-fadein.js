export default function lanFadein(){
$(function(){
    $(window).scroll(function (){
        $('.fadein').each(function(){
            const elemPos = $(this).offset().top;
            const scroll = $(window).scrollTop();
            const windowHeight = $(window).height();
            if (scroll > elemPos - windowHeight + 200){
                $(this).addClass('scrollin');
            }
        });
    });
});
}  