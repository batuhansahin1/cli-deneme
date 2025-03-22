const prompt = require("prompt-sync")();

function vkiHesapla(kilo, boy) {
  return kilo / ((boy * boy) / 10000);
}
let flag = true;
while (flag) {
  try {
    console.log("Bmi hesaplama aracına hoşgeldiniz");
    const kilo = parseFloat(prompt("Kilonuzu girin"));
    const boy = parseFloat(prompt("boyunuzu girin cm"));
    console.log(typeof kilo, typeof boy);
    const sonuc = vkiHesapla(kilo, boy);
    console.log(sonuc, typeof NaN);
    if (!sonuc) {
      flag = false;
      throw new Error("hatalı giriş yaptınız");
    }
    if (sonuc < 18.5) {
      console.log("Kilo almanız lazım");
    } else if (sonuc < 24.9) {
      console.log("sağlıklısınız");
    } else if (sonuc < 30) {
      console.log("şişmansınız");
    } else if (sonuc < 40) {
      console.log("obezsiniz");
    } else {
      console.log("aşırı obezsiniz");
    }
  } catch (error) {
    console.error(error);
  }
}
