// --- NAVIGATION ---

const platformSection = document.querySelector('.platform-section');

const obs = new IntersectionObserver(
   function (entries) {
      const ent = entries[0];
      if (!ent.isIntersecting) {
         document.querySelector('.nav').classList.add('transition');
      }

      if (ent.isIntersecting) {
         document.querySelector('.nav').classList.remove('transition');
      }

      if (ent.isIntersecting) {
         document.querySelector('.nav').classList.add('transition-back');
      }
   },
   {
      root: null,
      threshold: 0,
      rootMargin: '-70px',
   }
);
obs.observe(platformSection);

// --- SLIDER ---

// ARROW BUTTONS

const sliderItems = document.querySelectorAll('.slider-item');
const leftBtn = document.querySelector('.pointer-left');
const rightBtn = document.querySelector('.pointer-right');

let currentIndex = 1;

function showSlide(index) {
   // Hide all slider items
   sliderItems.forEach((item) => {
      item.style.display = 'none';
   });

   // Show the slide at the specified index
   sliderItems[index].style.display = 'block';
}

function nextSlide() {
   currentIndex = (currentIndex + 1) % sliderItems.length;
   showSlide(currentIndex);

   sliderItems.forEach((item, i) => {
      if (i === currentIndex) {
         dots[currentIndex].classList.add('current-dot');
      } else {
         dots[i].classList.remove('current-dot');
      }
   });
}

function previousSlide() {
   currentIndex = (currentIndex - 1 + sliderItems.length) % sliderItems.length;
   showSlide(currentIndex);
   sliderItems.forEach((item, i) => {
      if (i === currentIndex) {
         dots[currentIndex].classList.add('current-dot');
      } else {
         dots[i].classList.remove('current-dot');
      }
   });
}

// Show the first slide initially
showSlide(currentIndex);

// Set up event listeners for next and previous buttons

rightBtn.addEventListener('click', nextSlide);
leftBtn.addEventListener('click', previousSlide);

// DOTS

const dots = document.querySelectorAll('.black-dot');
const dot1 = document.querySelector('.dot1');
const dot2 = document.querySelector('.dot2');
const dot3 = document.querySelector('.dot3');

dot1.addEventListener('click', function () {
   dot1.classList.add('current-dot');
   dot2.classList.remove('current-dot');
   dot3.classList.remove('current-dot');

   sliderItems[0].style.display = 'block';
   sliderItems[1].style.display = 'none';
   sliderItems[2].style.display = 'none';
});

dot2.addEventListener('click', function () {
   dot1.classList.remove('current-dot');
   dot2.classList.add('current-dot');
   dot3.classList.remove('current-dot');

   sliderItems[0].style.display = 'none';
   sliderItems[1].style.display = 'block';
   sliderItems[2].style.display = 'none';
});

dot3.addEventListener('click', function () {
   dot1.classList.remove('current-dot');
   dot2.classList.remove('current-dot');
   dot3.classList.add('current-dot');

   sliderItems[0].style.display = 'none';
   sliderItems[1].style.display = 'none';
   sliderItems[2].style.display = 'block';
});

// --- MODAL WINDOW ---

const overlay = document.querySelector('.overlay');

const modal1 = document.querySelector('.modal1');
const openModalBtn1 = document.querySelector('.modal-btn-open1');
const closeModalBtn1 = document.querySelector('.btn-close1');

const modal2 = document.querySelector('.modal2');
const openModalBtn2 = document.querySelector('.modal-btn-open2');
const closeModalBtn2 = document.querySelector('.btn-close2');

// MODAL 1

const openModal1 = function () {
   modal1.classList.remove('hidden');
   overlay.classList.remove('hidden');
};

openModalBtn1.addEventListener('click', openModal1);

const closeModal1 = function () {
   modal1.classList.add('hidden');
   overlay.classList.add('hidden');
};

closeModalBtn1.addEventListener('click', closeModal1);

// MODAL 2

const openModal2 = function () {
   modal2.classList.remove('hidden');
   overlay.classList.remove('hidden');
};

openModalBtn2.addEventListener('click', openModal2);

const closeModal2 = function () {
   modal2.classList.add('hidden');
   overlay.classList.add('hidden');
};

closeModalBtn2.addEventListener('click', closeModal2);

// SLIDER MODAL

const sliderImgEls = document.querySelectorAll('.slider-img');

const modal = document.getElementById('myModal');

const modalImg = document.getElementById('img01');
const closeBtn = document.querySelector('.btn-close');

sliderImgEls.forEach((image) => {
   image.addEventListener('click', () => {
      modal.style.display = 'block';
      closeBtn.style.display = 'block';

      modalImg.src = image.src;
      modalImg.alt = image.alt;
   });
});

const close = closeBtn.addEventListener('click', () => {
   modal.style.display = 'none';
});

// --- MOBILE NAVIGATION ---

const navigation = document.querySelector('.mobile-nav');
const btnNavEl = document.querySelector('.btn-mobile-nav');

btnNavEl.addEventListener('click', function () {
   navigation.classList.toggle('nav-open');
});

// REMOVE OVERLAY ON SECTION CLICK

const sectionBtn = document.querySelectorAll('.nav-a');

sectionBtn.forEach((button) => {
   button.addEventListener('click', function () {
      navigation.classList.remove('nav-open');
   });
});
