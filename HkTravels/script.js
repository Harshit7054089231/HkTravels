const btn = document.querySelector('.list');

const burger = document.querySelector('.burger');
const ham = document.querySelector('.ham');

const y = document.querySelector(".effect1");
const z = document.querySelector(".effect2");

burger.addEventListener('click',() => {
  btn.classList.toggle('active');
  ham.classList.toggle('active');
})



y.addEventListener('click',() => {
  // x.classList.remove('active')
  y.classList.toggle('active')
});

z.addEventListener('click',() => {
  // x.classList.remove('active')
  z.classList.toggle('active')
});






const accordion = document.querySelectorAll(".btn");


for(let i=0 ; i < accordion.length; i++) 

{
  accordion[i].addEventListener('click',function() {
    
    // let x = this.nextElementSibling;
    // if(x.style.display === 'block')
    // x.style.display = 'none';
    // else
    // x.style.display = 'block';
    const panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
//To change background color



this.classList.toggle("active");

  });
}


// Preloader


const loader = document.querySelector('#loading');
function preloader() {

  loader.style.display="none";

} 



//Sick Carousel




$('.popular_des').slick({
  dots: true,
  infinite: true,
  speed: 300,
  // arrows: true,
  slidesToShow: 3,
  slidesToScroll: 1,
prevArrow : '.prev',
nextArrow : '.next',

  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});



// Scroll Animation




$(document).ready(function() {
  $('.anime1').waypoint(function(direction) {
    $('.anime1').addClass('animate__animated animate__fadeInLeft');
  },{
    offset:"50%"
  })
});

$(document).ready(function() {
  $('.anime2').waypoint(function(direction) {
    $('.anime2').addClass('animate__animated animate__fadeInRight');
  },{
    offset:"50%"
  })
});

$(document).ready(function() {
  $('.anime3').waypoint(function(direction) {
    $('.anime3').addClass('animate__animated animate__zoomIn');
  },{
    offset:"50%"
  })
});

$(document).ready(function() {
  $('.anime4').waypoint(function(direction) {
    $('.anime4').addClass('animate__animated animate__zoomIn');
  },{
    offset:"50%"
  })
});



$(document).ready(function() {
  $('.anime5').waypoint(function(direction) {
    $('.anime5').addClass('animate__animated animate__fadeInLeft');
  },{
    offset:"50%"
  })
});

$(document).ready(function() {
  $('.anime6').waypoint(function(direction) {
    $('.anime6').addClass('animate__animated animate__fadeInRight');
  },{
    offset:"50%"
  })
});


$(document).ready(function() {
  $('.anime7').waypoint(function(direction) {
    $('.anime7').addClass('animate__animated animate__zoomIn');
  },{
    offset:"50%"
  })
});
