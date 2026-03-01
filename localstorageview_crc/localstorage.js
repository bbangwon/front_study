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

    //row 개수(thead 포함)
    const tbl = document.getElementById("myTable");
    let r = tbl.rows.length - 1;
    console.log(`tbody row 개수: ${r}`);

    //셀 개수
    const cl = tbl.rows[0].cells.length;
    console.log(`첫 번째 row의 셀 개수: ${cl}`);

    for (let c = 0; c < cl; c++) {
      hTbody.rows[r - 1].cells[c].innerHTML = `[${r - 1}] [${c}]`;
    }
  });
};
