window.onload = () => {
  const panelFaqContainers = document.querySelectorAll(".panel-faq-container");
  console.log(panelFaqContainers);

  for (let i = 0; i < panelFaqContainers.length; i++) {
    panelFaqContainers[i].addEventListener("click", function () {
      console.log("나 클릭됨" + i);
    });
  }
};
