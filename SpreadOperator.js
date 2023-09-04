//Spread Operator
//Memecah Iterable Menjadi Element

// const mhs = ["Gian Sonia", "Salman", "Hamni"];

// console.log(...mhs[2]);

//Menggabukan 2 Array
// const dosen = ["Pak Agus", "Pak Ruuhwan", "Ibu Evi"];

// const orang = [...mhs, "Ozan Kuntul", ...dosen];

// console.log(orang);

//Melakukan Copy pada array

// const mhs = ["Gian Sonia", "Salman", "Hamni"];

// const mhs1 = [...mhs];
// mhs1[0] = "Sahril";
// console.log(mhs1);

// const liNama = document.querySelectorAll(".nama");

// console.log(liNama[0]);

// const mhs = [];
// for (let i = 0; i < liNama.length; i++) {
//   mhs.push(liNama[i].textContent.trim());
// }
// console.log(mhs);

// const mhs = [...liNama].map((a) => a.textContent);
// console.log(mhs);

const namas = document.querySelector(".namas");

const huruf = [...namas.textContent].map((h) => `<span>${h}</span>`).join("");
// console.log(huruf);

namas.innerHTML = huruf;
