/* navbar scolling animation */
window.addEventListener("scroll",()=>{

  const navAnimation = document.getElementById("header");
  if(window.scrollY>0){
    navAnimation.classList.add("nav-bg-color");
  }else{
    navAnimation.classList.remove("nav-bg-color");
  }

});



/* navbar scolling animation end */

/* Dark theme Animation start */

const checkbox = document.getElementById("checkbox");
checkbox.addEventListener("change", () => {
  document.body.classList.toggle("bright");
});



/* Dark theme Animation End */

/* Fixed Arrow Code Start */

const Fixed_arrow = document.querySelector(".bi-arrow-up-square-fill");
const Fixed_arrow_two = document.querySelector(".bi-arrow-up-square");

Fixed_arrow.addEventListener('mouseover',()=>{
   Fixed_arrow_two.style.opacity =1;
   Fixed_arrow.style.opacity=0;
});

Fixed_arrow.addEventListener('mouseout',()=>{
  Fixed_arrow_two.style.opacity =0;
  Fixed_arrow.style.opacity=1;
});

/* Fixed Arrow Code End */


/*====== model start =======*/
document.addEventListener("DOMContentLoaded",function(){
  const images = document.querySelectorAll(".portfolio-wrap img");
  let Readmore = document.querySelectorAll(".read-more");


  const model = document.querySelector(".model");
  let model_img = document.querySelector(".model-img");

  const close = document.querySelector(".close");
  let currentIndex=0;

  const prevBtn = document.querySelector(".btn-pre");
  const NextvBtn = document.querySelector(".btn-next");
  // const body_style = document.querySelector("body");



  // close icon start 
  close.addEventListener("click",()=>{
      model.classList.remove("show");
  });



  Readmore.forEach((btn,index)=>{
      btn.addEventListener("click", function(){
         currentIndex=index;
         UpadteImage()
         model.classList.add("show");
        //  body_style.style.scrollBehavior="none";
      });
   });
  // add click event for all images End

  //Button next start
      NextvBtn.addEventListener("click",function () {
          currentIndex = currentIndex + 1 >= images.length ? 0 : currentIndex + 1;
          UpadteImage ();
      });

  //Button nexr End

  // prev button start 
     prevBtn.addEventListener("click", function(){
        currentIndex = currentIndex -1 < 0 ? images.length -1 : currentIndex -1;
        UpadteImage ();
     });
    

  // prev button End


  //Upadte images start 
  function UpadteImage(){
     const image = images[currentIndex];
      model_img.src = image.src;
   
  }




});


/*==== Model page end ====== */


/* Home Text Animation  start */
// window.addEventListener("mouseover")

var words = document.getElementsByClassName('word');
var wordArray = [];
var currentWord = 0;

words[currentWord].style.opacity = 1;
for (var i = 0; i < words.length; i++) {
  splitLetters(words[i]);
}

function changeWord() {
  var cw = wordArray[currentWord];
  var nw = currentWord == words.length-1 ? wordArray[0] : wordArray[currentWord+1];
  for (var i = 0; i < cw.length; i++) {
    animateLetterOut(cw, i);
  }
  
  for (var i = 0; i < nw.length; i++) {
    nw[i].className = 'letter behind';
    nw[0].parentElement.style.opacity = 1;
    animateLetterIn(nw, i);
  }
  
  currentWord = (currentWord == wordArray.length-1) ? 0 : currentWord+1;
}

function animateLetterOut(cw, i) {
  setTimeout(function() {
    cw[i].className = 'letter out';
  }, i*80);
}

function animateLetterIn(nw, i) {
  setTimeout(function() {
    nw[i].className = 'letter in';
  }, 340+(i*80));
}

function splitLetters(word) {
  var content = word.innerHTML;
  word.innerHTML = '';
  var letters = [];
  for (var i = 0; i < content.length; i++) {
    var letter = document.createElement('span');
    letter.className = 'letter';
    letter.innerHTML = content.charAt(i);
    word.appendChild(letter);
    letters.push(letter);
  }
  
  wordArray.push(letters);
}

changeWord();
setInterval(changeWord, 4000);



(function() {
//   "use strict";

  /**
   * Easy selector helper function
   */
  const select = (el, all = false) => {
    el = el.trim()
    if (all) {
      return [...document.querySelectorAll(el)]
    } else {
      return document.querySelector(el)
    }
  }

  /**
   * Easy event listener function
   */
  const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all)

    if (selectEl) {
      if (all) {
        selectEl.forEach(e => e.addEventListener(type, listener))
      } else {
        selectEl.addEventListener(type, listener)
      }
    }
  }

  /**

   * Mobile nav toggle
   */
  on('click', '.mobile-nav-toggle', function(e) {
    select('#navbar').classList.toggle('navbar-mobile')
    this.classList.toggle('bi-list')
    this.classList.toggle('bi-x')
  });

  /**
   * Skills animation
   */
  let skilsContent = select('.skills-content');
  if (skilsContent) {
    new Waypoint({
      element: skilsContent,
      offset: '80%',
      handler: function(direction) {
        let progress = select('.progress .progress-bar', true);
        progress.forEach((el) => {
          el.style.width = el.getAttribute('aria-valuenow') + '%'
        });
      }
    })
  }

  /**

  
   * Porfolio isotope and filter
   */
  // window.addEventListener('load', () => {
  //   let portfolioContainer = select('.portfolio-container');
  //   if (portfolioContainer) {
  //     let portfolioIsotope = new Isotope(portfolioContainer, {
  //       itemSelector: '.portfolio-item',
  //       layoutMode: 'fitRows'
  //     });

  //     let portfolioFilters = select('#portfolio-flters li', true);

  //     on('click', '#portfolio-flters li', function(e) {
  //       e.preventDefault();
  //       portfolioFilters.forEach(function(el) {
  //         el.classList.remove('filter-active');
  //       });
  //       this.classList.add('filter-active');

  //       portfolioIsotope.arrange({
  //         filter: this.getAttribute('data-filter')
  //       });
  //     }, true);
  //   }

  // });

  // /**
  //  * Initiate portfolio lightbox 
  //  */
  // const portfolioLightbox = GLightbox({
  //   selector: '.portfolio-lightbox'
  // });

  // /**
  //  * Initiate portfolio details lightbox 
  //  */
  // const portfolioDetailsLightbox = GLightbox({
  //   selector: '.portfolio-details-lightbox',
  //   width: '90%',
  //   height: '90vh'
  // });

  // /**
  //  * Portfolio details slider
  //  */
  // new Swiper('.portfolio-details-slider', {
  //   speed: 400,
  //   loop: true,
  //   autoplay: {
  //     delay: 5000,
  //     disableOnInteraction: false
  //   },
  //   pagination: {
  //     el: '.swiper-pagination',
  //     type: 'bullets',
  //     clickable: true
  //   }
  // });

  /**
   * Initiate Pure Counter 
   */



  new PureCounter();

})();