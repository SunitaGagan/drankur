 // Load header
 fetch('header.html')
     .then(res => res.text())
     .then(data => {
         document.getElementById('header').innerHTML = data;
     });

 // Load footer
 fetch('footer.html')
     .then(res => res.text())
     .then(data => {
         document.getElementById('footer').innerHTML = data;
     });
 $('.hero-slider').owlCarousel({
     loop: true,
     margin: 0,
     nav: true,
     dots: true,
     items: 1,
     autoplay: true,
     autoplayTimeout: 4000,
     autoplayHoverPause: true,
     navText: [
         '<span class="arrow-left">‹</span>',
         '<span class="arrow-right">›</span>'
     ]
 });