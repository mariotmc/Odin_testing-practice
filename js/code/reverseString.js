function reverseString(str) {
  let splitString = str.split("");
  let reversedString = splitString.reverse();
  let joinedString = reversedString.join("");

  return joinedString;
}

export default reverseString;
