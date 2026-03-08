const getCookie = function () {
  const allCookies = document.cookie;
  console.log(allCookies);

  if (allCookies) {
    alert("저장된 쿠키의 값은:" + allCookies);
  } else {
    alert("저장된 쿠키가 없습니다.");
  }
};

const setCookie = function (cname, cvalue, cexpire) {
  let expiration = new Date();
  expiration.setDate(expiration.getDate() + parseInt(cexpire));

  let cookies = "";
  cookies += `${cname}=${cvalue};`;
  cookies += `expires=${expiration.toGMTString()}`;
  console.log(cookies);

  document.cookie = cookies;
};

const delCookie = function (cname) {
  setCookie(cname, "", 0);
  alert("쿠키를 삭제했습니다.");
};

const form = document.getElementById("form");
form.addEventListener("submit", function () {
  event.preventDefault();

  cname = document.getElementById("cname").value;
  if (cname != "") {
    cvalue = document.getElementById("cvalue").value;
    cexpire = document.getElementById("cexpire").value;
  }
  console.log("cname = " + cname);
  console.log("cvalue = " + cvalue);
  console.log("cexpire = " + cexpire);

  setCookie(cname, cvalue, cexpire);

  document.getElementById("form").reset();
  document.getElementById("cname").focus();
  alert("쿠키를 생성했습니다.");
});
