//Callbacks
//SYNCRONOUS
// function hallo(nama) {
//   alert(`Hallo ${nama}`);
// }

// function tampilPesan(callback) {
//   const nama = prompt("Masukan Nama");
//   callback(nama);
// }

// tampilPesan((nama) => alert(`Hallo ${nama}`));

// const mhs = [
//   {
//     nama: "Gian Sonia",
//     kelas: "2R",
//     nim: 2203010228,
//   },
//   {
//     nama: "Fauzan Zam'an",
//     kelas: "2Q",
//     nim: 2203010229,
//   },
//   {
//     nama: "Hamni Rahma",
//     kelas: "2T",
//     nim: 2203010230,
//   },
// ];

// console.log("mulai");
// mhs.forEach((m) => {
//   for (let i = 0; i < 100000000; i++) {
//     let date = new Date();
//   }
//   console.log(m.nama);
// });
// console.log("selesai");

// ASYNCRONOUS CALLBACKS
// function getDataMahasiswa(url, success, error) {
//   let xhr = new XMLHttpRequest();

//   xhr.onreadystatechange = function () {
//     if (xhr.readyState === 4) {
//       if (xhr.status === 200) {
//         success(xhr.response);
//       } else if (xhr.status === 404) {
//         error();
//       }
//     }
//   };

//   xhr.open("get", url);
//   xhr.send();
// }
// console.log("Mulai");

// getDataMahasiswa(
//   "json/mahasiswa.json",
//   (response) => {
//     const mhs = JSON.parse(response);
//     mhs.forEach((m) => console.log(m.nama));
//   },
//   (response) => {
//     console.log(response);
//   }
// );

// console.log("selesai");

console.log("mulai");
$.ajax({
  url: "json/mahasiswa.json",
  success: (response) => {
    response.forEach((r) => console.log(r.nama));
  },
  error: (response) => {
    console.log(response.responseText);
  },
});
console.log("selesai");
