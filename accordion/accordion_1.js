window.onload = () => {
  const panelFaqContainers = document.querySelectorAll(".panel-faq-container");

  for (let i = 0; i < panelFaqContainers.length; i++) {
    panelFaqContainers[i].addEventListener("click", function () {
      const panelFaqAnswer = this.querySelector(".panel-faq-answer");
      panelFaqAnswer.classList.toggle("active");
    });
  }

  const btnAllClose = document.querySelector("#btn-all-close");
  btnAllClose.addEventListener("click", function () {
    const panelFaqAnswers = document.querySelectorAll(".panel-faq-answer");
    for (let i = 0; i < panelFaqAnswers.length; i++) {
      panelFaqAnswers[i].classList.remove("active");
    }
  });
};
