// Distructuring

// function kalkulasi(a, b) {
//   return [a + b, a - b, a * b];
// }

// const [jumlah, kali] = penjumlahanPerkalian(20, 12);

// console.log(kali, jumlah);

// const [tambah, kurang, , bagi = "Tidak Ada", kali] = kalkulasi(2, 3);
// console.log(bagi);

// function kalkulasi(a, b) {
//   return {
//     tambah: a + b,
//     kurang: a - b,
//     kali: a * b,
//     bagi: a / b,
//   };
// }

// const { kurang, tambah, kali, bagi } = kalkulasi(2, 4);
// console.log(kurang);

// // DISTRUCTURING ARGUMENTS

// const mhs1 = {
//   nama: "gian sonia",
//   umur: 13,
//   email: "giansonia555@Gmail.com",
// };

// function cetak(mhs) {
//   return ` Halo nama saya ${mhs.nama}, saya berumur ${mhs.umur}, email: ${mhs.email}`;
// }

// console.log(cetak(mhs1));
// DISTRUCTURING ARGUMENTS

const mhs1 = {
  nama: "gian sonia",
  umur: 13,
  email: "giansonia555@Gmail.com",

  nilai: {
    tugas: 90,
    uts: 90,
    uas: 90,
  },
};

function cetak({ nama, umur, email, nilai: { tugas, uts, uas } }) {
  return ` Halo nama saya ${nama}, saya berumur ${umur}, email: ${email}. dan nilai uas saya adalah ${uas}`;
}

console.log(cetak(mhs1));
