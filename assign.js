const axios=require('axios')
//Given a string, find the reverse of it.
//function reversestring(s){
   // var string=s
   // a=[]
   // for(i=string.length;i>-1;i--){
   //     a.push(string[i])
   // }

   // console.log(a.join(''))
//}

//reversestring('phicode')
axios.get('https://jsonplaceholder.typicode.com/posts').then(data=>console.log(data))