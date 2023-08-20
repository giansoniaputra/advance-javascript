//1. Object literal
// let mahasiswa = {
//   nama: "Gian Sonia",
//   energy: 10,
//   makan: function (porsi) {
//     this.energy = this.energy + porsi;
//     console.log(`Selamat makan ${this.nama} selamat makan`);
//   },
// };
// let mahasiswa2 = {
//   nama: "Hamni Rahma",
//   energy: 10,
//   makan: function (porsi) {
//     this.energy = this.energy + porsi;
//     console.log(`Selamat makan ${this.nama} selamat makan`);
//   },
// };

//2. Function Declaration
// function Mahasiswa(nama, energi) {
//   let mahasiswa = {}; //Objecy Kosong
//   mahasiswa.nama = nama; //
//   mahasiswa.energi = energi;

//   mahasiswa.makan = function (porsi) {
//     this.energi += porsi;
//     console.log(`Halo ${nama}, Selamat makan`);
//   }; //

//   mahasiswa.main = function (jam) {
//     this.energi -= jam;
//     console.log(`Halo ${nama}, Selamat main`);
//   };
//   return mahasiswa;
// }
// let gian = Mahasiswa("Gian SOnia", 20);
// let hamni = Mahasiswa("Hamni Rahma", 10);

//3. Constructer Function

// const methodMahasiswa = {
//   makan: function (porsi) {
//     this.energi += porsi;
//     console.log(`Halo ${nama}, Selamat makan`);
//   },

//   main: function (jam) {
//     this.energi -= jam;
//     console.log(`Halo ${nama}, Selamat main`);
//   },

//   tidur: function (jam) {
//     this.energi += jam * 2;
//     console.log(`Halo ${nama}, Selamat Tidur`);
//   },
// };
// function Mahasiswa(nama, energi) {
//   let mahasiswa = {}; //Objecy Kosong
//   this.nama = nama; //
//   this.energi = energi;

//   mahasiswa.makan = methodMahasiswa.makan;
//   mahasiswa.main = methodMahasiswa.main;
//   mahasiswa.tidur = methodMahasiswa.tidur;

//   Mahasiswa.makan;
//   // return mahasiswa;
// }

// let gian = new Mahasiswa("Gian Sonia", 10);
// let hamni = new Mahasiswa("Hamni Rahma", 20);

// 4 Object Create
// const methodMahasiswa = {
//   makan: function (porsi) {
//     this.energi += porsi;
//     console.log(`Halo ${this.nama}, Selamat makan`);
//   },

//   main: function (jam) {
//     this.energi -= jam;
//     console.log(`Halo ${this.nama}, Selamat main`);
//   },

//   tidur: function (jam) {
//     this.energi += jam * 2;
//     console.log(`Halo ${this.nama}, Selamat Tidur`);
//   },
// };
// function Mahasiswa(nama, energi) {
//   let mahasiswa = Object.create(methodMahasiswa); //Objecy Kosong
//   mahasiswa.nama = nama;
//   mahasiswa.energi = energi;
//   return mahasiswa;
// }

// let gian = new Mahasiswa("Gian Sonia", 10);
// let hamni = new Mahasiswa("Hamni Rahma", 50);

//4 Prototype

// function Mahasiswa(nama, energi) {
//   this.nama = nama;
//   this.energi = energi;
// }

// Mahasiswa.prototype.makan = function (porsi) {
//   this.energi += porsi;
//   return "Selamat Makan";
// };
// Mahasiswa.prototype.main = function (jam) {
//   this.energi -= jam;
//   return "Selamat main";
// };
// Mahasiswa.prototype.tidur = function (jam) {
//   this.energi += jam * 2;
//   return "Selamat tidur";
// };

// let gian = new Mahasiswa("Gian Sonia", 50);

//Versi CLass

// class Mahasiswa {
//   constructor(nama, energi) {
//     this.nama = nama;
//     this.energi = energi;
//   }

//   makan(porsi) {
//     this.energi += porsi;
//     return "Selamat Makan";
//   }
//   main(jam) {
//     this.energi -= jam;
//     return "Selamat main";
//   }
//   tidur(jam) {
//     this.energi += jam * 2;
//     return "Selamat tidur";
//   }
// }

// let gian = new Mahasiswa("Gian Sonia", 10);

let angka = [1, 2, 3];

console.log(angka);
