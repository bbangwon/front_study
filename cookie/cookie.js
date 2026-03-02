function setCookie() {
  let expiration = new Date();
  expiration.setDate(expiration.getDate() + 10);
  console.log(expiration);
  console.log(expiration.toUTCString());
}

function getCookie() {
  const allCookies = document.cookie;

  if (!allCookies) {
    alert("저장된 쿠키가 없습니다. \n(첫 방문을 환영합니다)");
  } else {
    alert(`저장된 쿠키의 값은: ${allCookies}\n(다시 방문해주셔서 환영합니다.)`);
  }
}
