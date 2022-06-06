// const root = document.querySelector('#root')
const p = document.createElement("h3");
p.textContent =
  "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima sequi eveniet voluptas itaque laborum corrupti iusto accusamus beatae saepe, expedita repellendus";
p.style.border = "2px solid red";
p.style.fontSize = "17px";
p.style.display = "flex";
p.style.justifyContent = "center";
p.style.margin = "0px  500px 0px 500px";
p.style.borderRadius = "20PX";
p.style.padding = "10px";
document.body.prepend(p);
const div = document.createElement("div");
const intocode = document.createElement("a");
const google = document.createElement("a");
const instagram = document.createElement("a");

intocode.href = "https://github.com/intocode/intro-dom/blob/main/assets/5.png";
intocode.target = "blank";
google.href = "https://www.google.ru/";
google.target = "blank";
instagram.href = "https://www.instagram.com/";
instagram.target = "blank";

intocode.textContent = "intocode";
google.textContent = "google";
instagram.textContent = "instagram";
div.style.display = "flex";
div.style.justifyContent = "center";
div.style.justifyContent = "space-around";
div.style.margin = "20px 430px 0px 430px";
p.after(div);
div.append(intocode, google, instagram);
