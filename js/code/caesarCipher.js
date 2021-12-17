// function caesarCipher(str) {
//   const alphabet = "abcdefghijklmnopqrstuvwxyz";

//   for (let i = 0; str.length; i++) {
//     let index = alphabet.indexOf(str[i]);
//     if (index == 25) {
//       str[i] = "a";
//     } else {
//       let newIndex = index + 1;
//       str[i] = alphabet[newIndex];
//     }
//   }

//   return str;
// }

function caesarCipher(str) {
  let alphabet = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
    " ",
    "-",
    "_",
    ".",
    "&",
    "?",
    "!",
    "@",
    "#",
    "/",
  ];

  let alphabet13 = [
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    " ",
    "-",
    "_",
    ".",
    "&",
    "?",
    "!",
    "@",
    "#",
    "/",
  ];

  let resultStr = [];
  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < alphabet.length; j++) {
      if (str[i] === alphabet[j]) {
        resultStr.push(alphabet13[j]);
      }
    }
  }
  return resultStr.join("");
}

export default caesarCipher;
