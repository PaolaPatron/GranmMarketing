document.addEventListener("DOMContentLoaded", function(){
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
          document.getElementById('navbar_top').classList.add('fixed-top');
          // agrega padding
          headerHeight = document.querySelector('.header').offsetHeight;
          document.body.style.paddingTop = headerHeight  + 'px';
        } else {
          document.getElementById('navbar_top').classList.remove('fixed-top');
           // saca padding
          document.body.style.paddingTop = '0';
        } 
    });
  }); 



 
   
