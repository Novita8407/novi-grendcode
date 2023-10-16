// dalam array nya dikalikan misal 2*2=4
const numbers = [4, 9, 16, 25];
const newArr = numbers.map(Math.sqrt);
console.log(newArr);
//

// dalam array dikalikan 10 misal 65*10=650
const numberss = [65, 44, 12, 4];
const newArr2 = numberss.map(myFunction);
function myFunction(num) {
  return num * 10;
}
console.log(newArr2);
//

// untuk ngprint data satu satu ke bawah
const numbers1 = [4, 9, 16, 25];
let tes = numbers1.map(function (input) {
  console.log(input);
});
//
