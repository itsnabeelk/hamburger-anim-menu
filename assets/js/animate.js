
gsap.registerPlugin(ScrollTrigger);

// animate-style1

gsap.from(".navbar-brand",{
  duration: 1,
  scrollTrigger: {
    trigger: ".navbar-brand",
    toggleActions: "play restart restart restart",
  },
  x: -100,
  opacity:0,
  stagger: 0.3,
});

gsap.from(".menu-container div",{
    duration: 0.5,
    scrollTrigger: {
      trigger: ".menu-container div",
      toggleActions: "play play play play",
    },
    y: -600,
    opacity:0,
    stagger: 0,
  });



// animate-style2

// gsap.from(".wrapper .nav-links", {
//     duration: 1,
//     scrollTrigger: {
//       trigger: ".wrapper .nav-links",
//       start: "top center",
//       toggleActions: "play restart restart reverse",
//     },
//     y: -300,
//     stagger: 0.3,
//   });

// animate-style3

// gsap.from(".slider_content", {
//     duration: 2,
//     x:-300,
//     opacity:0,
//     stagger: 3,
//     scrollTrigger: {
//       trigger: ".slider_content",
//       start: "center 60%",
//       end:"center 20%",
//       scrub: false, 
//       markers: false,
//       toggleActions: "play reverse play reverse",
//     },
//   });



// text-hover-start


const createElm = function (menuItem) {
  let menuItemsTexts = menuItem.children[0].children[0];

  const menuItemsTextsArray = [...menuItemsTexts.textContent];

  menuItemsTexts.textContent = "";

  const textsArray = [];

  menuItemsTextsArray.forEach((menuItemText) => {
    textsArray.push(`<span>${menuItemText}</span>`);
  });

  textsArray.forEach((textArray) => {
    menuItemsTexts.innerHTML += textArray;
  });

  const parentElm = menuItemsTexts.parentElement;

  const parentElmHeight = parentElm.clientHeight;
  parentElm.style.height = `${parentElmHeight}px`;

  const cloneItem = menuItemsTexts.cloneNode(true);
  parentElm.appendChild(cloneItem);
};

const animation = function (menuItem) {
  gsap.defaults({
    ease: "power1",
    stagger: {
      amount: 0.14,
      from: "start",
    },
  });
  menuItem.addEventListener("mouseover", function () {
    gsap.to(this.children[0].children[0].children, {
      y: "-100%",
    });
    gsap.to(this.children[0].children[1].children, {
      y: "-100%",
    });
  });

  menuItem.addEventListener("mouseleave", function () {
    gsap.to(this.children[0].children[0].children, {
      y: "0",
    });
    gsap.to(this.children[0].children[1].children, {
      y: "0",
    });
  });
};

const targetItems = document.querySelectorAll(".js-menu-item");

targetItems.forEach((targetItem) => {
  const menuItem = targetItem;
  createElm(menuItem);
  animation(menuItem);
});

// text-hover-close



