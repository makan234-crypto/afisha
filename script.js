const images = [
  "images/интерстеллар кадры из фильма 1.jpg",
  "images/интерстеллар кадры из фильма2.jpg",
  "images/интерстеллар кадры из фильма3.jpg",
  "images/интерстеллар кадры из фильма4.jpg"
];

let current = 0;
const galleryImg = document.getElementById("gallery-image");

function nextImage() {
  current = (current + 1) % images.length;
  galleryImg.src = images[current];
}

function prevImage() {
  current = (current - 1 + images.length) % images.length;
  galleryImg.src = images[current];
}

function toggleDirector() {
  const info = document.getElementById('director-info');
  info.style.display = (info.style.display === 'block') ? 'none' : 'block';
}
    // Активация анимации при прокрутке
function handleScrollAnimation() {
    document.querySelectorAll('.animate, .scale-anim, .slide-left, .slide-right, .slide-up')
        .forEach(el => {
            const rect = el.getBoundingClientRect();
            if (rect.top < window.innerHeight - 100) {
                el.classList.add('in-view');
            }
        });
}

window.addEventListener('scroll', handleScrollAnimation);
handleScrollAnimation();

// Открытие похожих фильмов при клике
document.querySelectorAll(".movie").forEach(movie => {
  movie.style.cursor = "pointer"; // курсор-рука
  movie.addEventListener("click", () => {
      const link = movie.getAttribute("data-link");
      if (link) window.open(link, "_blank");
  });
});
// Открытие информации об актёрах
document.querySelectorAll(".actor").forEach(actor => {
  actor.style.cursor = "pointer"; // курсор-рука
  actor.addEventListener("click", () => {
      const link = actor.getAttribute("data-link");
      if (link) window.open(link, "_blank");
  });
});
// Открытие страницы фильма по клику на постер
const poster = document.getElementById("main-poster");
if (poster) {
    poster.style.cursor = "pointer";
    poster.addEventListener("click", () => {
        const link = poster.getAttribute("data-link");
        if (link) window.open(link, "_blank");
    });
}
// Клик по рекламным баннерам
document.querySelectorAll(".ad-right-top").forEach(ad => {
  ad.style.cursor = "pointer";
  ad.addEventListener("click", () => {
      const link = ad.getAttribute("data-link");
      if (link) window.open(link, "_blank");
  });
});
