array = [4,4,1,1,2,4,5,2]
function filtering(a){
    k=[]
for(i=0;i<a.length;i++){
  for(j=i+1;j<a.length;j++){
    if(!k.includes(a[j])){
      if(a[i]===a[j]){
    k.push(a[i])
      }
    }
  }
    
}
console.log(k)
}
filtering(array)

function filter(a){
  k=[]
  j={}
for(i=0;i<a.length;i++){
if(j[a[i]]){

}
else{
  k.push(a[i])
  
}
j[a[i]]=a[i]
}
console.log(k)
}
var string = "Welcome to this Javascript Guide!";
function reverseBySeparator(string, separator) {
  return string.split(separator).reverse().join(separator);
}
//var reverseEntireSentence = reverseBySeparator(string, " ");
//var reverseEachWord = reverseBySeparator(reverseEntireSentence, "");
//console.log(reverseEachWord)