//FOR OF
// const mhs = ["Gian Sonia", "Salman Aldfarizi", "Hamni Rahma"];

// for (let i = 0; i < mhs.length; i++) {
//   console.log(mhs[i]);
// }

// mhs.forEach((m) => console.log(m));

// for (const m of mhs) {
//   console.log(m);
// }

// STRING
// const nama = "Gian Sonia";
// for (const m of nama) {
//   console.log(m);
// }

// const mhs = ["Gian Sonia", "Salman Aldfarizi", "Hamni Rahma"];

// // mhs.forEach((m, i) => console.log(`${m} adalah mahasiswa ke-${i + 1}`));

// for (const [i, m] of mhs.entries()) {
//   console.log(m);
// }

// const li = document.querySelectorAll(".nama");
// // li.forEach((n) => console.log(n.innerHTML));

// for (n of li) {
//   console.log(n.innerHTML);
// }

// ARGUMENT
// let jumlah = 0;
// function jumlahkanPangkat() {
//   for (n of arguments) {
//     jumlah += n;
//   }
//   return jumlah;
// }

// console.log(jumlahkanPangkat(1, 2, 3, 4, 5));

// FOR...IN

const mhs = {
  nama: "Gian Sonia",
  umur: 22,
};

for (m in mhs) {
  console.log(m);
}
