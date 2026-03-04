const setCookie = function () {
  event.preventDefault();
  cname = document.getElementById("cname").value;
  if (cname != "") {
    cvalue = document.getElementById("cvalue").value;
    cexpire = document.getElementById("cexpire").value;
  }
  console.log("cname = " + cname);
  console.log("cvalue = " + cvalue);
  console.log("cexpire = " + cexpire);
  let expiration = new Date();
  expiration.setDate(expiration.getDate() + parseInt(cexpire));
  let cookies = "";
  cookies += `${cname}=${cvalue};`;
  cookies += `expires=${expiration.toGMTString()}`;
  console.log(cookies);
  document.cookie = cookies;
  alert("쿠키를 생성했습니다.");
};

const form = document.getElementById("form");
form.addEventListener("submit", setCookie);
