function perkalian(angka1, angka2, angka3) {
  return angka1 * angka2 * angka3;
}
let varperkalian = perkalian(4, 5, 6);
console.log(varperkalian);

const namaku = function (nama) {
  console.log("Hallo namaku", nama);
};
namaku("novi");

function pengurangan(a, b) {
  return a - b;
}
function penjumlahan(a, b) {
  return a + b;
}
function kalkulasi(a, b, fungsi) {
  return fungsi(a, b);
}
console.log(kalkulasi(3, 5, pengurangan));

function pembagian(a, b) {
  return a / b;
}
console.log(pembagian(6, 2));

function angka(angkaAwal, angkaAkhir) {
  for (let index = 1; index <= 20; index++) {
    console.log(index);
  }
}
angka(1, 20);

function pangkat2(angka) {
  return 5 * 5;
}
console.log(pangkat2(5));
