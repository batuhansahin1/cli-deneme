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
  try {
    if (islem == 5) return;
    const number = Number(prompt("Enter a number"));
    const number2 = Number(prompt("Enter a number"));
    switch (islem) {
      case "1":
        //kullanıcı 1 girerse toplama fonksiyonu çalıştırılacak
        sonuc = topla(number, number2);
        break;
      case "2":
        sonuc = cikart(number, number2);
        break;
      case "3":
        //kullanıcı 3 girerse çarpma işlemi çalışacak
        sonuc = carp(number, number2);
        break;
      case "4":
        sonuc = bol(number, number2);
        break;
      default:
        throw new Error(
          "you entered number in wrong format please enter valid number"
        );
    }
  } catch (error) {
    console.log(error);
  }
  console.log(sonuc);
}
