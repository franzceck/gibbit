const dt1 = document.querySelector("#dt1");
const dt2 = document.querySelector("#dt2");
const dt3 = document.querySelector("#dt3");
const dt4 = document.querySelector("#dt4");
const dt5 = document.querySelector("#dt5");
const dt6 = document.querySelector("#dt6");
const dt7 = document.querySelector("#dt7");
const StoriesSection = document.querySelector(".stories");
const GrabbitumSection = document.querySelector(".grabbitum");
const PrezSection = document.querySelector("#nice");
const ExecutiveSection = document.querySelector(".Exe");
const DisplayingSection = document.querySelector(".Displaying");
const MediaSection = document.querySelector(".Media");
const FooterSection = document.querySelector(".footer");

window.addEventListener("scroll", function () {
  let windo = window.pageYOffset;
  if (GrabbitumSection.offsetTop <= windo && PrezSection.offsetTop > windo) {
    dt1.classList.add("active");
    dt2.classList.add("active");
    dt3.classList.remove("active");
    dt4.classList.remove("active");
    dt5.classList.remove("active");
    dt6.classList.remove("active");
    dt7.classList.remove("active");
  } else {
    dt1.classList.remove("active");
    dt2.classList.remove("active");
  }

  if (PrezSection.offsetTop <= windo && ExecutiveSection.offsetTop > windo) {
    dt1.classList.add("active");
    dt2.classList.remove("active");
    dt3.classList.add("active");
    dt4.classList.remove("active");
    dt5.classList.remove("active");
    dt6.classList.remove("active");
    dt7.classList.remove("active");
  } else {
    dt1.classList.remove("active");
  }

  if (
    ExecutiveSection.offsetTop <= windo &&
    DisplayingSection.offsetTop > windo
  ) {
    dt1.classList.add("active");
    dt2.classList.remove("active");
    dt3.classList.remove("active");
    dt4.classList.add("active");
    dt5.classList.remove("active");
    dt6.classList.remove("active");
    dt7.classList.remove("active");
  } else {
    dt1.classList.remove("active");
  }

  if (DisplayingSection.offsetTop <= windo && MediaSection.offsetTop > windo) {
    dt1.classList.add("active");
    dt2.classList.remove("active");
    dt3.classList.remove("active");
    dt4.classList.remove("active");
    dt5.classList.add("active");
    dt6.classList.remove("active");
    dt7.classList.remove("active");
  } else {
    dt1.classList.remove("active");
  }

  if (MediaSection.offsetTop <= windo) {
    dt1.classList.add("active");
    dt2.classList.remove("active");
    dt3.classList.remove("active");
    dt4.classList.remove("active");
    dt5.classList.remove("active");
    dt6.classList.add("active");
    dt7.classList.remove("active");
  } else {
    dt1.classList.remove("active");
  }
});
