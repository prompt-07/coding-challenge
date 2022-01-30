
console.log(perfectCheck(6))
console.log(perfectCheck(12))
console.log(perfectCheck(8))

function getFactors(num){
  let a = []
  let i=1
  while(i<=num/2){
    if(num%i===0)
      a.push(i)
    
    i++
  }
  return a;
}

function perfectCheck(num){
  let factorsOfNum = getFactors(num)
  let sum = factorsOfNum.reduce((partialSum,el) => partialSum+el,0);
  
  return sum===num ? "Perfect" : sum>num ? "Abundant"  : "Deficient";
}
