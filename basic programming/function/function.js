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
