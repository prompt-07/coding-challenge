
console.log(findNoOfFishes(1,2,3,4,12))
console.log(findNoOfFishes(2,3,4,5,24))

function findNoOfFishes(k,l,m,n,total){
  if(k==1 || l==1 || m==1 || n==1)
     return total
    
  let count = 0;
  for(let i=1;i<=total;i++){
    if(i%k == 0 || i%l == 0 || i%m == 0 || i%n == 0)
      count=count+1 
  }
  return count
}
