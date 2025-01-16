arr = [2,3,45,6,87]

function ifEven (val){
  return val % 2 == 0;
}
const check = arr.filter(ifEven)

console.log(check)

