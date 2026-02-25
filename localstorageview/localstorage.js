window.onload = () => {
  const btnAllView = document.querySelector(".btnAllView");

  btnAllView.addEventListener("click", () => {
    // for (let i = 0; i < localStorage.length; i++) {
    //   const key = localStorage.key(i);
    //   const value = localStorage.getItem(key);

    //   console.log(key + "," + value);
    // }

    //연습코드
    let ar = [];
    let result = "";
    ar.push({
      name: "홍길동",
      email: "hong@hong.com",
      age: 25,
      pastime: "음악감상",
    });
    ar.push({ name: "이순신", email: "lee@lee.com", age: 44, pastime: "걷기" });
    ar.push({
      name: "강감찬",
      email: "kang@kang.com",
      age: 37,
      pastime: "영화보기",
    });
    ar.push({
      name: "김유신",
      email: "kim@kim.com",
      age: 55,
      pastime: "야식먹기",
    });
    ar.push({
      name: "광개토",
      email: "kwang@kwang.com",
      age: 60,
      pastime: "독서",
    });

    for (const i in ar) {
      result += "<tr>\n";
      result += "  <td>" + ar[i].name + "</td>\n";
      result += "  <td>" + ar[i].email + "</td>\n";
      result += "  <td>" + ar[i].age + "</td>\n";
      result += "  <td>" + ar[i].pastime + "</td>\n";
      result += "</tr>";
    }

    // const hTbody = document.getElementById("htmlTbody");
    // hTbody.innerHTML = result;

    $("#htmlTbody").empty().append(result);
  });
};
