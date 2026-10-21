export function getOrdinalNumber(num) {
  const numToString = num.toString();

  if (
    numToString.slice(-2) === "11" ||
    numToString.slice(-2) === "12" ||
    numToString.slice(-2) === "13"
  ) {
    return `${num}th`;
  } else if (numToString.at(-1) === "1") {
    return `${num}st`;
  } else if (numToString.at(-1) === "2") {
    return `${num}nd`;
  } else if (numToString.at(-1) === "3") {
    return `${num}rd`;
  }
  return `${num}th`;
}
