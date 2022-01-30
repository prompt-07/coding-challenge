
let count=0
countTrials(12,count)

function countTrials(x,count){
  if(x===1)
    return console.log(count)
    
  else{
    count = count+1
    if(x%2==0)
      countTrials(x/2,count)
    else
      countTrials(3*x+1,count)
  }
}
