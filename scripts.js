const openMobileMenu = document.getElementById("mobileMenu");
const closeMobileMenu = document.getElementById("closeMobileMenu");
const modalMobileMenu = document.getElementById("modal");

const submitEmailBtn = document.getElementsByClassName("email-go")[0];
const emailInput = document.getElementsByClassName("email-input")[0];
const validationText = document.getElementsByClassName("validation")[0];
const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

let isEmailInputValid = false;

// Check if email input is in an email address format
checkEmailInputValidation = () => {
  if (regex.test(String(emailInput.value).toLowerCase())) {
    isEmailInputValid = true;
  } else {
    isEmailInputValid = false;
  }
}


// Submit email button - If validation error then apply css error class
submitEmailBtn.addEventListener('click', event => {
  event.preventDefault();
  checkEmailInputValidation();
  if (isEmailInputValid) {
    if (emailInput.classList.contains("validation-border")) {
      emailInput.classList.toggle("validation-border");
      validationText.classList.toggle("d-none");
    }
    emailInput.value = "";
  } else {
    if (!emailInput.classList.contains("validation-border")) {
      emailInput.classList.toggle("validation-border");
      validationText.classList.toggle("d-none");
    }
  }
}, false);


// clicking hamburger icon opens mobile menu
openMobileMenu.addEventListener('click', event => {
  event.preventDefault();
  openMobileMenu.classList.toggle("hidden");
  closeMobileMenu.classList.toggle("hidden");
  modalMobileMenu.classList.toggle("hidden");
}, false);

closeMobileMenu.addEventListener('click', event => {
  event.preventDefault();
  closeMobileMenu.classList.toggle("hidden");
  openMobileMenu.classList.toggle("hidden");
  modalMobileMenu.classList.toggle("hidden");
}, false);


// Close Modal when clicking anywhere outside of modal
window.onclick = function (event) {
  if (event.target === modalMobileMenu) {
    modalMobileMenu.classList.toggle("hidden");
    openMobileMenu.classList.toggle("hidden");
    closeMobileMenu.classList.toggle("hidden");
  }
} 

// Carousel

jQuery(document).ready(function($) {
  "use strict";
  //  TESTIMONIALS CAROUSEL HOOK
  $('#customers-testimonials').owlCarousel({
      loop: true,
      center: true,
      items: 3,
      margin: 0,
      autoplay: true,
      dots:true,
      autoplayTimeout: 8500,
      smartSpeed: 450,
      responsive: {
        0: {
          items: 1
        },
        768: {
          items: 2
        },
        1170: {
          items: 3
        }
      }
      // responsive: {
      //   0: {
      //     items: 2
      //   },
      //   768: {
      //     items: 3
      //   },
      //   1170: {
      //     items: 3
      //   }
      // }
  });
});