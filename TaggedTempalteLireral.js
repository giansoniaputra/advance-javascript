// //Tagged Template
// const nama = "Gian Sonia";
// const umur = 28;

// function coba(strings, ...values) {
//   //   let result = "";
//   //   strings.forEach((str, i) => {
//   //     result += `${str}${values[i] || ""}`;
//   //   });
//   //   return result;

//   return strings.reduce(
//     (result, str, i) => `${result}${str}${values[i] || ""}`,
//     ""
//   );
// }

// const str = coba`Hallo nama saya ${nama}, saya berumur ${umur} tahun`;

// console.log(str);

//Highlight
//Tagged Template
const nama = "Gian Sonia";
const umur = 28;
const hobi = "Gaming";

function highlight(strings, ...values) {
  //   let result = "";
  //   strings.forEach((str, i) => {
  //     result += `${str}${values[i] || ""}`;
  //   });
  //   return result;

  return strings.reduce(
    (result, str, i) =>
      `${result}${str} <span class="hl"> ${values[i] || ""}</span>`,
    ""
  );
}

const str = highlight`Hallo nama saya ${nama}, saya berumur ${umur} tahun. Hobbi saya ${hobi}`;

document.body.innerHTML = str;
