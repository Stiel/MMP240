$(document).ready(function () {
    $("nav").addClass('animated slideInRight');
    //$("#featured_1").addClass('animated fadeInRight');
});




$(window).scroll(function(){
//    console.log("scrolled!");   
    var how_much_document_scrolled = $(document).scrollTop();
//    console.log(how_much_document_scrolled);
    
    var h1_offset_top = $('h1#tagline').offset().top;
     console.log(h1_offset_top);
    
//    console.log(how_much_document_scrolled + "," + h1_offset_top);
    
    if(h1_offset_top - how_much_document_scrolled < window.innerHeight){
        $('h1#tagline').addClass('animated slideInRight');
    }
    
    
    var h3_offset_top = $('h1#tagline2').offset().top;
    if(h3_offset_top - how_much_document_scrolled < window.innerHeight-50){
        $('h1#tagline2').addClass('animated slideInRight');
    }
    
    var h3_offset_top = $('h1#tagline3').offset().top;
    if(h3_offset_top - how_much_document_scrolled < window.innerHeight-50){
        $('h1#tagline3').addClass('animated slideInRight');
    }
    
    var h3_offset_top = $('h1#tagline4').offset().top;
    if(h3_offset_top - how_much_document_scrolled < window.innerHeight-50){
        $('h1#tagline4').addClass('animated slideInRight');
    }
});