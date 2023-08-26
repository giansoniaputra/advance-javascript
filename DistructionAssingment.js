//Distructering Asssingment

//Distructering Array
const perkenalan = ["Halo", "nama", "saya", "Gian"];

// const [a, b, c, d] = perkenalan;
// const [a, , , d] = perkenalan;

// console.log(a, d);

// SWAP
// let a = 1;
// let b = 2;

// [a, b] = [b, a];
// console.log(a, b);

// Return Value pada funtion

// function coba() {
//   return [a, b];
// }

// const [q, w] = coba();
// console.log(q, w);

// // REST PARAMETER
// const [a, ...values] = [1, 2, 3, 4, 5, 6];

// console.log(values);

// DISTRUCTERING OBJECT

// const mhs = {
//   nama: "Gian Sonia",
//   gian: 23,
// };

// const { nama, umur } = mhs;

// console.log(nama);

// ASSINGMENT TANPA DEKLARASI OBJECT

// ({ nama, umur } = {
//   nama: "Gian Sonia",
//   gian: 23,
// });

// console.log(nama);

// ASSING KE VARIABLE BARU
// const mhs = {
//   nama: "Gian Sonia",
//   gian: 23,
// };

// const { nama: n, umur: u } = mhs;

// console.log(n);

// DEFAULT VALUE
// const mhs = {
//   nama: "Gian Sonia",
//   gian: 23,
//   email: "gian@gmail.com",
// };

// const { nama, umur, email = "giansonia555@gmail.com" } = mhs;

// console.log(email);

// DEFAULT VALUE + Assign Ke Variable Baru
// const mhs = {
//   nama: "Gian Sonia",
//   gian: 23,
//   email: "gian@gmail.com",
// };

// const { nama: n, umur: u, email: e = "giansonia555@gmail.com" } = mhs;

// console.log(e);

// // DEFAULT VALUE + Assign Ke Variable Baru + REST PARAMETER
// const mhs = {
//   nama: "Gian Sonia",
//   umur: 23,
//   email: "gian@gmail.com",
// };

// const { nama, ...values } = mhs;

// console.log(values);

//MENGAMBIL FIELD PADA OBJECT YANG DIKIRIM SEBAGAI PARAMETER DALAM FUNCTION
const mhs = {
  id: 123,
  nama: "Gian Sonia",
  umur: 23,
  email: "gian@gmail.com",
};

function getIdMhs({ id }) {
  return id;
}

console.log(getIdMhs(mhs));
