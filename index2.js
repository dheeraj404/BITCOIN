let hamMenuIcon = document.getElementById("ham-menu");
let navBar = document.getElementById("nav-bar");
let navLinks = navBar.querySelectorAll("li");

hamMenuIcon.addEventListener("click", () => {
  navBar.classList.toggle("active");
  hamMenuIcon.classList.toggle("fa-times");
});
navLinks.forEach((navLinks) => {
  navLinks.addEventListener("click", () => {
    navBar.classList.remove("active");
    hamMenuIcon.classList.toggle("fa-times");
  });
});

const e1 = document.getElementById('coin_base');
const e2 = document.getElementById('thor');
const e3 = document.getElementById('axelar');
const e4 = document.getElementById('flare');
const e5 = document.getElementById('arkhia');
const e6 = document.getElementById('squid');
const e7 = document.getElementById('avax');
const e8 = document.getElementById('song');
const e9 = document.getElementById('flare');
const e10 = document.getElementById('hedera');
const e11 = document.getElementById('evmos');
e1.addEventListener('click', function() {
  window.location.href = 'https://www.coinbase.com/'; 
});
e2.addEventListener('click', function() {
  window.location.href = 'https://thorchain.org/'; 
});
e3.addEventListener('click', function() {
  window.location.href = 'https://axelar.network/'; 
});
e4.addEventListener('click', function() {
  window.location.href = 'https://flare.network/'; 
});
e5.addEventListener('click', function() {
  window.location.href = 'https://www.arkhia.io/'; 
});
e6.addEventListener('click', function() {
  window.location.href = 'https://www.squidrouter.com/'; 
});
e7.addEventListener('click', function() {
  window.location.href = 'https://www.avax.network/'; 
});
e8.addEventListener('click', function() {
  window.location.href = 'https://flare.network/songbird/'; 
});
e9.addEventListener('click', function() {
  window.location.href = 'https://flare.network/'; 
});
e10.addEventListener('click', function() {
  window.location.href = 'https://hedera.com/'; 
});
e11.addEventListener('click', function() {
  window.location.href = 'https://evmos.org/'; 
});
