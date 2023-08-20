// //Funtion Expresion
// const tampilNama = function (nama) {
//   return `Hallo ${nama}`;
// };

// console.log(tampilNama("Gian"));

// const tampilNama = (nama) => {
//   return `Hallo ${nama}`;
// };
// console.log(tampilNama("Gian"));

// const tampilNama = (nama, waktu) => {
//   return `Hallo ${nama}, Selamat ${waktu}`;
// };
// console.log(tampilNama("Gian", "Pagi"));

// //Implicite Return
// const tampilNama = (nama) => `Hallo ${nama}`;
// console.log(tampilNama("Gian", "Pagi"));

// const tampilNama = () => `Hallo Word`;
// console.log(tampilNama());

//Function Map
let mahasiswa = ["Gian", "Hamni", "Salman"];

// let jumlahHuruf = mahasiswa.map(function (nama) {
//   return nama.length;
// });

// console.log(jumlahHuruf);

//Arrow Funtion
// let jumlahHuruf = mahasiswa.map((nama) => nama.length);
// console.log(jumlahHuruf);

let jumlahHuruf = mahasiswa.map((nama) => ({
  nama: nama,
  jumlah: nama.length,
}));
console.table(jumlahHuruf);
