//Rest Paremeter
// function myF(...args) {
//   return args;
// }
// console.log(myF(1, 2, 3, 4, 5));

// function jumlah(...args) {
//   console.log(args.reduce((b, bV) => b + bV));
// }

// jumlah(1, 2, 3);

//ARRAY DISTRUKTURING

// const kel1 = ["Sahrul", "Salman", "Gian", "Dwikipedia"];

// const [ketua, wakil, ...anggota] = kel1;

// console.log(anggota);

//OBJECT DISTRUCTURING
// const team = {
//   pm: "Hamni Rahma",
//   be: "Gian Sonia",
//   be2: "Acil",
//   fe: "salman",
//   fe2: "agus",
// };

// const { pm, ...anggota } = team;
// console.log(anggota);

//FILTERING
function filter(type, ...args) {
  return args.filter((a) => typeof a === type);
}

console.log(filter("boolean", 1, 2, "Gian", true));
