"use strict";

let js = "hello";
if (js === "hello") alert("Welcome to handyman website , Enjoy our services");

const result = {
  result1: "very good",
  result2: "not bad",
  result3: "very bad",
};
console.log(result);

const interestedIn = prompt(
  "your feedback is important ( very good, not bad, very bad)"
);
console.log(interestedIn);
console.log(result[interestedIn]);

// const item  = document.querySelector( ".item");

// const dragStart = () => {
//     item.scrollLeft = e.pagex;
// }

// item.addEventListener("mousemove", dragging);

let slideIndex = 1;

showSlides(slideIndex);
// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}

function showSlides(n) {
  let i;

  let slides = document.getElementsByClassName("item1");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "block";
}

function checkMail(){
    let mail=document.getElementById('email').value;
    let mailh=document.getElementById('mailh')
    if (mail==''||!String(mail).includes('@') || !String(mail).includes('.com')) {
        mailh.style.display=("block");  
    }else{
        mailh.style.display=("none");  

    }
}

(function () {
    "use strict";
  
    let forms = document.querySelectorAll('.form');
  
    forms.forEach( function(e) {
      e.addEventListener('submit', function(event) {


        let mail=document.getElementById('email').value;
        let mailh=document.getElementsByClassName('mailh')
        if (mail=='') {
            mailh.style.display = 'block';  
        }
        event.preventDefault();
  
        let thisForm = this;
  
        let action = thisForm.getAttribute('action');
        
        if( ! action ) {
          displayError(thisForm, 'The form action property is not set!')
          return;
        }
        thisForm.querySelector('.loading').classList.add('d-block');
        thisForm.querySelector('.error-message').classList.remove('d-block');
        thisForm.querySelector('.sent-message').classList.remove('d-block');
  
        let formData = new FormData( thisForm );
  
        
      });
    });
  
    function php_email_form_submit(thisForm, action, formData) {
      fetch(action, {
        method: 'POST',
        body: formData,
        headers: {'X-Requested-With': 'XMLHttpRequest'}
      })
      .then(response => {
        return response.text();
      })
      .then(data => {
        thisForm.querySelector('.loading').classList.remove('d-block');
        if (data.trim() == 'OK') {
          thisForm.querySelector('.sent-message').classList.add('d-block');
          thisForm.reset(); 
        } else {
          throw new Error(data ? data : 'Form submission failed and no error message returned from: ' + action); 
        }
      })
      .catch((error) => {
        displayError(thisForm, error);
      });
    }
  
    function displayError(thisForm, error) {
      thisForm.querySelector('.loading').classList.remove('d-block');
      thisForm.querySelector('.error-message').innerHTML = error;
      thisForm.querySelector('.error-message').classList.add('d-block');
    }
  
  })();