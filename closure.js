// function init() {
//   let nama = "Gian Sonia";
//   function tampilNama() {
//     console.log(nama);
//   }
//   return tampilNama;
// }
// let panggilNama = init();
// panggilNama();

//Closure
// function ucapanSalam(waktu) {
//   return function (nama) {
//     console.log(
//       `Hallo ${nama}, Selamat ${waktu}. Semoga harimu menyenagkan :)`
//     );
//   };
// }

// let selamatPagi = ucapanSalam("Pagi");
// let selamatSiang = ucapanSalam("Siang");
// let selamatMalam = ucapanSalam("Malam");

// selamatPagi("Gian");
// selamatSiang("Gian");
// selamatMalam("Gian");

// console.dir(selamatMalam);

let add = (function () {
  let counter = 0;
  return function () {
    return ++counter;
  };
})();

console.log(add());
console.log(add());
console.log(add());
console.log(add());
console.log(add());
