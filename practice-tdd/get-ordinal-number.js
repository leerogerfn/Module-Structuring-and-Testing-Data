export function getOrdinalNumber(num) { 
  const numToString = num.toString()
  
  if (numToString === "11" || numToString === "12" || numToString === "13") {
  return `${num}th`
} else if (numToString.at(-1) === "1") {
  return `${num}st`;
} else if (numToString.at(-1) === "2") {
  return `${num}nd`;
} else if (numToString.at(-1) === "3") {
  return `${num}rd`;
} return `${num}th`
}

