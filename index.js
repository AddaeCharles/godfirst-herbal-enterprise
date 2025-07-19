//  toggle icon navbar///////////////////
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
  menuIcon.classList.toggle('bx-x');
  navbar.classList.toggle('active');
};






// scroll sections actine links
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
  sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if (top >= offset && top < offset + height) {
      navLinks.forEach(links => {
        links.classList.remove('active');
        document.querySelector('header nav a[href*= ' + id + ']').classList.add('active');
      });
    };
  });

  ///////////////// // sticky navbar////////////////////
  let header = document.querySelector('header');

  header.classList.toggle('sticky', window.scrollY > 100);

  // remove toggle icon and navbar when click navbar link
  menuIcon.classList.remove('bx-x');
  navbar.classList.remove('active');

};


//scroll revaeal///////////////////
ScrollReveal({
  reset: true,
  distance: '80px',
  duration: 2000,
  delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'bottom' });

function orderViaWhatsApp(element) {
  const container = element.closest('.portfolio-layer');
  const productName = container.querySelector('h4')?.textContent || "";
  const productDesc = container.querySelector('p')?.textContent || "";

  const message = `Hello! I'm interested in ordering:\n\n*${productName}*\n${productDesc}\n\nPlease provide pricing and availability information. Thank you!`;
  const encodedMsg = encodeURIComponent(message);
  const phoneNumber = "233546448842";

  const waLink = `https://wa.me/${phoneNumber}?text=${encodedMsg}`;
  window.open(waLink, '_blank');
}

// Toggle functions for read more/less
function toggleMoreText(event) {
  event.preventDefault();
  const text = document.getElementById("moreText");
  const btn = event.target;
  if (text.style.display === "none") {
    text.style.display = "block";
    btn.textContent = "Read Less";
  } else {
    text.style.display = "none";
    btn.textContent = "Read More";
  }
}

function toggleServiceText(event, btn) {
  event.preventDefault();
  const serviceText = btn.nextElementSibling;
  if (serviceText.style.display === "none") {
    serviceText.style.display = "block";
    btn.textContent = "Read Less";
  } else {
    serviceText.style.display = "none";
    btn.textContent = "Read More";
  }
}

// Replace all fillContactForm calls with orderViaWhatsApp
document.addEventListener('DOMContentLoaded', function() {
  const links = document.querySelectorAll('a[onclick*="orderViaWhatsApp"]');
  links.forEach(link => {
    link.setAttribute('onclick', 'orderViaWhatsApp(this)');
    link.setAttribute('href', '#');
  });
});

