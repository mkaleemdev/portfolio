// ============= header ==========
let header = document.querySelector("header");

window.addEventListener("scroll", function () {
  let scrollTop = window.scrollY || document.documentElement.scrollTop;

  if (scrollTop > 300) {
    header.classList.add("show");
  } else {
    header.classList.remove("show");
  }

});


// ========== custom cursor ===========
const cursor = document.querySelector(".custom-cursor");

window.addEventListener("mousemove", (e) => {
  cursor.style.left = e.clientX + "px";
  cursor.style.top = e.clientY + "px";
});

// ==== follow me %%%%
const follow_me = document.querySelector(".follow-me");
window.addEventListener("scroll", function () {
  let scrollTop = window.scrollY || document.documentElement.scrollTop;

  if (scrollTop > 100) {
    follow_me.classList.add("darkHeader");
  } else {
    follow_me.classList.remove("darkHeader");
  }
});

// ==== button click to top %%%%

$(window).scroll(function () {
  var scroll = $(window).scrollTop();

  if (scroll >= 500) {
    $(".click-top a").removeClass("darkHeader");
  } else {
    $(".click-top a").addClass("darkHeader");
  }
});

// ==== mobile navbar *****

$(document).ready(function () {
  $(".menu-icon i").click(function () {
    $(".mobile-navbar").show();
  });
  $(".cros-icon").click(function () {
    $(".mobile-navbar").hide();
  });
  $(".mob-menu li a").click(function () {
    $(".mobile-navbar").hide();
  });
});

// multi text for intro section  =========

class TypeWriter {
  constructor(txtElement, words, wait = 3000) {
    this.txtElement = txtElement;
    this.words = words;
    this.txt = "";
    this.wordIndex = 0;
    this.wait = parseInt(wait, 8);
    this.type();
    this.isDeleting = false;
  }

  type() {
    // Current index of word
    const current = this.wordIndex % this.words.length;
    // Get full text of current word
    const fullTxt = this.words[current];

    // Check if deleting
    if (this.isDeleting) {
      // Remove char
      this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
      // Add char
      this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    // Insert txt into element
    this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;

    // change color for data-text
    this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;

    // Initial Type Speed
    let typeSpeed = 100;

    if (this.isDeleting) {
      typeSpeed /= 2;
    }

    // If word is complete
    if (!this.isDeleting && this.txt === fullTxt) {
      // Make pause at end
      typeSpeed = this.wait;
      // Set delete to true
      this.isDeleting = true;
    } else if (this.isDeleting && this.txt === "") {
      this.isDeleting = false;
      // Move to next word
      this.wordIndex++;
      // Pause before start typing
      typeSpeed = 300;
    }

    setTimeout(() => this.type(), typeSpeed);
  }
}

// Init On DOM Load
document.addEventListener("DOMContentLoaded", init);

// Init App
function init() {
  const txtElement = document.querySelector(".txt-type");
  const words = JSON.parse(txtElement.getAttribute("data-words"));
  const wait = txtElement.getAttribute("data-wait");
  // Init TypeWriter
  new TypeWriter(txtElement, words, wait);
}

// &&&&&&&&&&&&&&&& tsparticles ==========
tsParticles.load("tsparticles", {
  particles: {
    number: {
      value: 50,
    },
    size: {
      value: 3,
    },
    move: {
      enable: true,
      speed: 1,
    },
    shape: {
      type: "circle",
    },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#ffffff",
      opacity: 0.4,
      width: 1,
    },
  },
});

// ============ counters =============
const counters = document.querySelectorAll('.count');

const formatNumber = (num) => {
  return num.toLocaleString();
};

const animateCounter = (el) => {
  const target = +el.getAttribute('data-target');
  let count = 0;
  const step = target / 120;

  const update = () => {
    if (count < target) {
      count += step;
      el.innerText = formatNumber(Math.ceil(count)) + "+";
      requestAnimationFrame(update);
    } else {
      el.innerText = formatNumber(target) + "+";
      el.classList.add("animate");
    }
  };

  update();
};

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      animateCounter(entry.target);
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 1 });

counters.forEach(counter => {
  observer.observe(counter);
});
