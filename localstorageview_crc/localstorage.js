window.onload = () => {
  const btnCrc = document.querySelector(".btnCrc");

  btnCrc.addEventListener("click", () => {
    let hTbody = document.querySelector("#htmlTbody");
    const newRow = hTbody.insertRow();
    const newCell0 = newRow.insertCell();
    const newCell1 = newRow.insertCell();
    const newCell2 = newRow.insertCell();
    const newCell3 = newRow.insertCell();

    const newText0 = document.createTextNode("홍길동");
    newCell0.appendChild(newText0);

    const newText1 = document.createTextNode("honggildong@example.com");
    newCell1.appendChild(newText1);

    const newText2 = document.createTextNode("30");
    newCell2.appendChild(newText2);

    const newText3 = document.createTextNode("Reading");
    newCell3.appendChild(newText3);
  });
};
