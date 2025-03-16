const prompt = require("prompt-sync")();

function topla(n1, n2) {
  return n1 + n2;
}
const cikart = (n1, n2) => n1 - n2;
const carp = function (n1, n2) {
  return n1 * n2;
};
function bol(n1, n2) {
  if (n2 === 0) return "Hiçbir sayı sıfıra bölünemez";
  return n1 / n2;
}

let sonuc;
while (true) {
  const islem = prompt(
    "Islem girin:(1:toplama,2:çıkarma,3:çarpma 4:bölme 5:çıkış)"
  );
  if (islem == 5) return;
  const number = Number(prompt("Enter a number"));
  const number2 = Number(prompt("Enter a number"));
  switch (islem) {
    case "1":
      sonuc = topla(number, number2);
      break;
    case "2":
      sonuc = cikart(number, number2);
      break;
    case "3":
      sonuc = carp(number, number2);
      break;
    case "4":
      sonuc = bol(number, number2);
      break;
    default:
      console.log(
        "you entered number in wrong format please enter valid number"
      );
  }
  console.log(sonuc);
}
