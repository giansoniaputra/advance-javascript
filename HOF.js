const angka = [2, 4, 3, 1, 5, 6, 8, 7, 9, 10];

//Mencari angka lebih besar dari 3
// //For
// const newAngka = [];
// for (let i = 0; i < angka.length; i++) {
//   if (angka[i] >= 3) {
//     newAngka.push(angka[i]);
//   }
// }
// console.log(newAngka);

// //Filter
// const newAngka = angka.filter((a) => a >= 3);

// console.log(newAngka);

// // MAP
// //kalikan semua angka dengan 2

// const newAngka = angka.map((a) => a * 2);
// console.table(newAngka);

// //REDUCE
// //jumlahkan semua isi angka

// const newAngka = angka.reduce(
//   (accumulator, currentValue) => accumulator + currentValue
// );
// console.table(newAngka);

//CHAINING
// cari angka > 5
//kalikan 3
//jumlahkan
const hasil = angka
  .filter((a) => a > 3)
  .map((a) => a * 3)
  .reduce((acc, cV) => acc + cV, 0);

console.log(hasil);
