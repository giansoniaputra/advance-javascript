// const mhs = {
//   nama: "Gian Sonia",
//   kelas: "R",
//   NIM: "2203010228",
// };

// const el = `<div class="mhs">
//     <h2>${mhs.nama}</h2>
//     <span class="nim">NIM: ${mhs.NIM}</span>
// </div>`;

// // 1. LOOPIMG
// const mhs = [
//   {
//     nama: "Gian Sonia",
//     NIM: "2203010228",
//   },
//   {
//     nama: "Hamni",
//     NIM: "2203010228",
//   },
//   {
//     nama: "Salman",
//     NIM: "2203010228",
//   },
// ];
// const el = `<div class="mhs">
// ${mhs
//   .map(
//     (m) => `<ul>
// <li>${m.nama}</li>
// <li>${m.NIM}</li>
// </ul>`
//   )
//   .join("")}
// </div>`;

// // 2. CONDITIONAL
// const lagu = {
//   judul: "Yuru Ni Kakeru",
//   penyanyi: "Yoasobi",
//   feat: "Lisa",
// };

// const el = `<div class="lagu">
// <ul>
// <li>${lagu.judul}</li>
// <li>${lagu.penyanyi}${lagu.feat ? ` (feat ${lagu.feat})` : ""}</li>
// </ul>
// </div>`;

// 4. NESTED
// HTML Fragment Bersarang

const mhs = {
  nama: "Gian Sonia",
  semester: "8",
  matkul: ["Rekayasa Sistem", "Algoritma", "KAP", "Kalkulus"],
};

const el = `<div class="mhs">
<h2>${mhs.nama}</h2>
<span>Semester :${mhs.semester}</span>
<h4>Mata Kuliah</h4>
${cetakMataKuliah(mhs.matkul)}
</div>`;

function cetakMataKuliah(matkul) {
  return `<ol>
    ${matkul.map((mk) => `<li>${mk}</li>`).join("")}
    </ol>`;
}

document.body.innerHTML = el;
