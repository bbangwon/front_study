function setCookie() {
  let expiration = new Date();
  expiration.setDate(expiration.getDate() + 7);
  console.log(expiration);
  console.log(expiration.toUTCString());

  let cookies = "";
  cookies = "userid=superman;expires=" + expiration.toUTCString();
  console.log(cookies);

  document.cookie = cookies;
  alert("쿠키를 생성하였습니다.");
}

function getCookie() {
  const allCookies = document.cookie;

  if (!allCookies) {
    alert("저장된 쿠키가 없습니다. \n(첫 방문을 환영합니다)");
  } else {
    alert(`저장된 쿠키의 값은: ${allCookies}\n(다시 방문해주셔서 환영합니다.)`);
  }
}

function delCookie() {
  // document.cookie = "username=hongkildong";
  // document.cookie = "username=leesoonsin"; //쿠키 수정
  document.cookie = "username=;expires=Sat,01 Jan 1972 00:00:00";
  alert("쿠키를 삭제하였습니다.");
}
