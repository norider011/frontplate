 export default function heroScroll(){
$(function(){
    $('#move_target').on('click', function(){
        const targetTop = $('#target_point').offset().top;
        $('html,body').animate({
            scrollTop: targetTop
        }, 500);
        return false;
    });
});
}