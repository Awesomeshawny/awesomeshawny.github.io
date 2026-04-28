document.addEventListener("DOMContentLoaded", () => {
  const cards = Array.from(document.querySelectorAll(".feature-card"));

  const image = document.getElementById("featureImage");
  const image2 = document.getElementById("featureImage2");
  const title = document.getElementById("featureTitle");
  const description = document.getElementById("featureDescription");

  const mobileTitle = document.getElementById("mobileFeatureTitle");
  const prevBtn = document.getElementById("prevFeature");
  const nextBtn = document.getElementById("nextFeature");

  let currentIndex = 0;

  function activateIndex(index) {
    const card = cards[index];

    cards.forEach(c => c.classList.remove("active"));
    card.classList.add("active");

    image.src = card.dataset.image;
    title.textContent = card.dataset.title;
    description.innerHTML = card.dataset.description;

    // mobile title sync
    if (mobileTitle) {
      mobileTitle.textContent = card.dataset.title;
    }

    if (!card.dataset.image2) {
      image2.classList.add("d-none");
      image.classList.remove("w-50");
      image.classList.add("w-60");
    } else {
      image2.classList.remove("d-none");
      image2.src = card.dataset.image2;

      image.classList.remove("w-60");
      image.classList.add("w-50");
    }

    currentIndex = index;
  }

  // Desktop hover
  cards.forEach((card, i) => {
    card.addEventListener("mouseenter", () => activateIndex(i));
  });

  // Mobile buttons
  if (prevBtn && nextBtn) {
    prevBtn.addEventListener("click", () => {
      const next = (currentIndex - 1 + cards.length) % cards.length;
      activateIndex(next);
    });

    nextBtn.addEventListener("click", () => {
      const next = (currentIndex + 1) % cards.length;
      activateIndex(next);
    });
  }

  // Init
  if (cards.length > 0) {
    activateIndex(0);
  }
});