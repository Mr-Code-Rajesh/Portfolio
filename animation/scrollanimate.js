
//************----- Fade Left Animation Start ----*********//

const observer_left = new IntersectionObserver ((element) => {
      element.forEach((entry)=>{
        console.log(entry);
        if(entry.isIntersecting){
            entry.target.classList.add('fade-left-show');
        }
        else{
            entry.target.classList.remove('fade-left-show');
            
        }
      });
});


const HiddenElement = document.querySelectorAll(".fade-animate-left");
HiddenElement.forEach((el)=> observer_left.observe(el));

//************----- Fade Left Animation End ----*********//



//************----- Fade Right Animation Start ----*********//

const observer_right = new IntersectionObserver ((element) => {
    element.forEach((entry)=>{
      console.log(entry);
      if(entry.isIntersecting){
          entry.target.classList.add('fade-right-show');
      }
      else{
          entry.target.classList.remove('fade-right-show');     
      }
    });
});


const Fade_right_Element = document.querySelectorAll(".fade-animate-right");
Fade_right_Element.forEach((el)=> observer_right.observe(el));

//************----- Fade Right Animation End ----*********//



//************----- Fade Down Animation Start ----*********//

const observer_down = new IntersectionObserver ((element) => {
    element.forEach((entry)=>{
      console.log(entry);
      if(entry.isIntersecting){
          entry.target.classList.add('fade-down-show');
      }
      else{
          entry.target.classList.remove('fade-down-show');     
      }
    });
});


const Fade_down_Element = document.querySelectorAll(".fade-animate-down");
Fade_down_Element.forEach((el)=> observer_down.observe(el));



//************----- Fade Down Animation Start ----*********//




//************----- Fade Top Animation Start ----*********//

const observer_top = new IntersectionObserver ((element) => {
    element.forEach((entry)=>{
      console.log(entry);
      if(entry.isIntersecting){
          entry.target.classList.add('fade-top-show');
      }
      else{
          entry.target.classList.remove('fade-top-show');     
      }
    });
});


const Fade_top_Element = document.querySelectorAll(".fade-animate-top");
Fade_top_Element.forEach((el)=> observer_top.observe(el));



//************----- Fade Top Animation Start ----*********//
