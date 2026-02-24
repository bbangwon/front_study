window.onload = () => {
  const btnSetLocalData = document.querySelector(".btnSetLocalData");
  const inputData = document.querySelector("input");

  btnSetLocalData.addEventListener("click", () => {
    localStorage.setItem("userid", inputData.value);
    inputData.value = "";
  });

  const btnGetLocalData = document.querySelector(".btnGetLocalData");
  btnGetLocalData.addEventListener("click", () => {
    const userid = localStorage.getItem("userid");
    if (userid) {
      inputData.value = userid;
    } else {
      alert("저장된 데이터가 없습니다.");
    }
  });

  const btnRemoveLocalData = document.querySelector(".btnRemoveLocalData");
  btnRemoveLocalData.addEventListener("click", () => {
    localStorage.removeItem("userid");
    inputData.value = "";
  });
};
