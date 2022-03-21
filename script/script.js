console.log("welcome");
let btnClick = document.getElementById("clicked");
let nav = document.querySelector(".nav");
let project_btn = document.querySelector(".project__name");

btnClick.onclick = function () {
  // console.log("clicked");
  nav.classList.toggle("nav-clicked");
};

//Progress bar starts here..
let number_html = document.getElementById("number_html");
let counter_html = 0;
setInterval(() => {
  if (counter_html == 75) {
    clearInterval();
  } else {
    counter_html += 1;
    number_html.innerHTML = counter_html + "%";
  }
}, 25);

let number_css = document.getElementById("number_css");
let counter_css = 0;
setInterval(() => {
  if (counter_css == 70) {
    clearInterval();
  } else {
    counter_css += 1;
    number_css.innerHTML = counter_css + "%";
  }
}, 27);

let number_sass = document.getElementById("number_sass");
let counter_sass = 0;
setInterval(() => {
  if (counter_sass == 70) {
    clearInterval();
  } else {
    counter_sass += 1;
    number_sass.innerHTML = counter_sass + "%";
  }
}, 27);

let number_JavaScript = document.getElementById("number_JavaScript");
let counter_JavaScript = 0;
setInterval(() => {
  if (counter_JavaScript == 60) {
    clearInterval();
  } else {
    counter_JavaScript += 1;
    number_JavaScript.innerHTML = counter_JavaScript + "%";
  }
}, 32);

let number_react = document.getElementById("number_react");
let counter_react = 0;
setInterval(() => {
  if (counter_react == 40) {
    clearInterval();
  } else {
    counter_react += 1;
    number_react.innerHTML = counter_react + "%";
  }
}, 50);

let number_angular = document.getElementById("number_angular");
let counter_angular = 0;
setInterval(() => {
  if (counter_angular == 10) {
    clearInterval();
  } else {
    counter_angular += 1;
    number_angular.innerHTML = counter_angular + "%";
  }
}, 160);
//Progress bar ends here..
