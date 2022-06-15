array = [2,5,6,3,4,20,12,20,4,11,5,2,3,45,51,6,25,7,11]
function filtering(a){
    k=[]
for(i=0;i<a.length;i++){
  for(j=i+1;j<a.length;j++){
if(a[i]===a[j]){
    k.push(a[i])
}
  }
    
}
console.log(k)
}
filtering(array)