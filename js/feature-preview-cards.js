  document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll(".feature-card");
    const image = document.getElementById("featureImage");
    const image2 = document.getElementById("featureImage2");
    const title = document.getElementById("featureTitle");
    const description = document.getElementById("featureDescription");

    function activateCard(card) {
      cards.forEach(c => c.classList.remove("active"));
      card.classList.add("active");

      image.src = card.dataset.image;
      title.textContent = card.dataset.title;
      description.innerHTML = card.dataset.description;

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
    }

    cards.forEach(card => {
      card.addEventListener("mouseenter", () => activateCard(card));
    });

    if (cards.length > 0) {
      activateCard(cards[0]);
    }
  });