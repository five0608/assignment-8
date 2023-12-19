$(function(){
    var slierout=0;
    setInterval(function(){
        if(slierout<2){
            slierout++;
        }else{
            slierout=0;
        }
        $(".slide").eq(slierout).siblings().fadeOut();
        $(".slide").eq(slierout).fadeIn();
    },3000);
})
