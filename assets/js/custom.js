
// scrollsmooth-start

const lenis = new Lenis()
lenis.on('scroll', (e) => {
  console.log(e)
})
lenis.on('scroll', ScrollTrigger.update)
gsap.ticker.add((time)=>{
  lenis.raf(time * 1000)
})
gsap.ticker.lagSmoothing(0)

// scroll-smooth-end

// navbar-start
console.clear();
const app = (() => {
  let body;
  let menu;
  let menuItems;

  const init = () => {
    body = document.querySelector("body");
    menu = document.querySelector(".menu-icon");
    menuItems = document.querySelectorAll(".nav__list-item");

    applyListeners();
  };

  const applyListeners = () => {
    menu.addEventListener("click", () => toggleClass(body, "nav-active"));
  };

  const toggleClass = (element, stringClass) => {
    if (element.classList.contains(stringClass))
    element.classList.remove(stringClass);else
    element.classList.add(stringClass);
  };

  init();
})();


// plus-drop-menu
$(document).ready(function() {
  $('.plus-drop').click(function() {
    var $plusDrop = $(this);
    var $dropdownCustom = $('.dropdown-custom');

    $dropdownCustom.slideToggle(600, function() {
      $plusDrop.toggleClass('rotate');
      if ($dropdownCustom.css('display') === 'block') {
        $plusDrop.find('img').attr('src', 'assets/images/icons/minus.svg');
      } else {
        $plusDrop.find('img').attr('src', 'assets/images/icons/plus.svg');
      }
    });
  });
});
// close


// profile-dropdown
function toggleDropdown() {
  var dropdown = document.getElementById("profile-dropdown");
  var dropdownContent = document.getElementById("profile-dropdown-content");
  var dropdownIcon = document.getElementById("dropdown-icon");
  
  dropdown.classList.toggle("active");
  dropdownContent.style.opacity = dropdown.classList.contains("active") ? "1" : "0";
  dropdownContent.style.visibility = dropdown.classList.contains("active") ? "visible" : "hidden";
  dropdownIcon.classList.toggle("dropdown-icon-active");
}

document.addEventListener("DOMContentLoaded", function() {
  var dropdown = document.getElementById("profile-dropdown");
  var dropdownContent = document.getElementById("profile-dropdown-content");
  var dropdownIcon = document.getElementById("dropdown-icon");
  
  dropdown.classList.remove("active");
  dropdownContent.style.opacity = "0";
  dropdownContent.style.visibility = "hidden";
  dropdownIcon.classList.remove("dropdown-icon-active");
});
// close

// navbar-close