// Parallax
$(window).on('load', function(){
    $('.jumbotron').addClass('tampil');
});

$(window).scroll(function (){
  var wScroll = $(this).scrollTop(); 
    // jumbotron
    $('.jumbotron img').css({
       'transform' : 'translate(0px,'+ wScroll/3+'%)'
       });
    $('.jumbotron h1').css({
       'transform' : 'translate(0px,'+ wScroll/1+'%)'
       });
    
    
       // Konten
       if( wScroll > $('.konten').offset().top -500 ){
           $('.konten h1').addClass('muncul2');
        }
       if( wScroll > $('.konten').offset().top -300 ){
        $('.konten .gam1').addClass('muncul');
        $('.konten .he1').addClass('muncul1');
        }
        if( wScroll > $('.konten').offset().top -100 ){
            $('.konten .gam2').addClass('muncul');
            $('.konten .he2').addClass('muncul1');
        }
        if( wScroll < $('.konten').offset().top -100 ){
            $('.konten img').each(function(i){
                setTimeout(function(){
                    $('.konten .gam').eq(i).addClass('muncul');
                    $('.konten .he').addClass('muncul1');
                }, 1000 * (i+1));
            });
        }
});


