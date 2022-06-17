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
//filtering(array)

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
//function reverseBySeparator(string, separator) {
 // return string.split(separator).reverse().join(separator);
//}
//var reverseEntireSentence = reverseBySeparator(string, " ");
//var reverseEachWord = reverseBySeparator(reverseEntireSentence, "");
//console.log(reverseEachWord)

//setInterval(function (text) {
  //console.log(text);
//}, 3000, 'Hello, World');//
//b=0
//function add(){
  //if(b>10){
 //   clearInterval(a)
 // }
  //b=b+1
  //console.log(b)
//}
//a=setInterval(add,1000)
function twoNumberSum(array, targetSum) {
	// Sort the array and iterate it with one pointer at each extreme
	// At each iteration, check if the sum of the two pointers is bigger or smaller than the target
	// If it's bigger, move the right pointer to the left
	// If it's smaller, move the left pointer to the right
	let sortedArray = array.sort((a,b) => a-b)
	let leftLimit = 0
	let rightLimit = sortedArray.length-1

	while (leftLimit < rightLimit) {
			const currentSum = sortedArray[leftLimit] + sortedArray[rightLimit]
console.log(rightLimit,'ra',leftLimit)
			if (currentSum === targetSum) return [sortedArray[leftLimit], sortedArray[rightLimit]]
			else currentSum < targetSum ? leftLimit++ : rightLimit--        
	}

	return []
}
console.log(twoNumberSum([9,1,3,4,5], 6)) // [1,5]
console.log(twoNumberSum([1,2,3,4,5], 10))