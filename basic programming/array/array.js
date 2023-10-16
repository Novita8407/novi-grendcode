// ini array
let wacana = ["novi", "inne", "rindi", "meng"];
console.log(wacana[0]);

let Number = [1, 2, 3, 4, 5];
let penjumlahan = Number[4] + Number[1];
console.log(penjumlahan);

// menghapus index
const fruits = ["banana", "orange", "apple", "mango"];
function deleteData(index, arr) {
  arr.splice(index, 1);
}
deleteData(2, fruits);
console.log(fruits);
