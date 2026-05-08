console.log("BCC Ultra App lancé");

const cards = document.querySelectorAll(".action-card");

cards.forEach(card => {

  card.addEventListener("click", () => {

    card.style.transform = "scale(0.95)";

    setTimeout(() => {

      card.style.transform = "scale(1)";

    }, 150);

  });

});
