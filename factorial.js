const prompt = require("prompt-sync")();

function computeFactorial(number) {
  if (number > 1) {
    return number * computeFactorial(number - 1);
  }
  return 1;
}
while (true) {
  const giris = prompt(
    "Faktöriyel hesaplama programına hoşgeldiniz 1-hesapla 2-çıkış"
  );
  if (giris === "1") {
    const sayı = prompt("Sayıyı girin");
    sonuc = computeFactorial(Number(sayı));
    console.log(sonuc);
  } else if (giris == 2) {
    break;
  } else {
    console.log("geçersiz giriş");
  }
}
