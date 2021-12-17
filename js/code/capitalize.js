function capitalize(str) {
  const firstLetter = str[0].toUpperCase();
  const remainingStr = str.slice(1);
  const newString = firstLetter + remainingStr;

  return newString;
}

export default capitalize;
