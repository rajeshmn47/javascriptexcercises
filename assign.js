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
//axios.get('https://jsonplaceholder.typicode.com/posts').then(data=>console.log(data))

function asyncResolveFunc() {
   function resolver(resolve, reject) {
     resolve("Success");
   }
   return new Promise(resolver);
 }
 function asyncRejectFunc() {
   function resolver(resolve, reject) {
     reject("Failure");
   }
   return new Promise(resolver);
 }
 // driver code
 //const promiseSuccess = asyncResolveFunc();
 //const promiseFailure = asyncRejectFunc();
 // Succeeded promise .then executes first function passed as argument
 //promiseSuccess.then(
 //  (successData) => {
 //    console.log(successData);
 //  },
 //  (failureData) => {
   //  console.log(failureData);
  // }
 //);
 // Failed promise .then executes second function passed as argument
 //promiseFailure.then(
   //(successData) => {
   //  console.log(successData);
  // },
  // (failureData) => {
  //   console.log(failureData);
  // }
 //);
 
 function setTimeoutPromise(delay) {
   function resolver(resolve) {
     setTimeout(resolve, delay);
   }
   return new Promise(resolver);
 }
 // driver code
 //console.log("Task started");
 //const timeoutPromise = setTimeoutPromise(3000);
 //timeoutPromise.then(() => {
 //  console.log("Task completed");
 //});

// driver code

function asyncFunc1() {
  return new Promise((resolve) =>
    setTimeout(() => {
      resolve("Resolved async1");
    }, 5000)
  );
}
function asyncFunc2() {
  return new Promise((resolve) =>
    setTimeout(() => {
      resolve("Resolved async2");
    }, 5000)
  );
}
function asyncFunc3() {
  return new Promise((resolve, reject) =>
    setTimeout(() => {
      resolve("Rejected async3");
    }, 5000)
  );
}
// driver code
const asyncArr = [asyncFunc1, asyncFunc2, asyncFunc3];
//const promiseArr = asyncArr.map((async) => async());
//Promise.race(promiseArr).then(console.log).catch(console.log); 
//const promiseArra = asyncArr.map((async) => async());
//finalResolution = Promise.race(promiseArr);
//finalResolution
 // .then((output) => {
 //   for (let data of output) {
//      console.log(data);
 //   }
 // })
 // .catch((err) => console.log(err));
 async function k(){
 for(i=0;i<asyncArr.length;i++){
  a=new Date().getTime()/1000

  asyncArr[i]()
  console.log(a)
 }
}
//k()
function asyncFunc() {
  console.log("Started asyncFunc1");
  a=new Date().getTime()/1000
  console.log(a)
  //Async1 code
  setTimeout(() => {
    console.log("Completed asyncFunc1");
    console.log("Started asyncFunc2");
    //Async2 code
    a=new Date().getTime()/1000
    console.log(a)
    setTimeout(() => {
      console.log("Completed asyncFunc2");
      console.log("Started asyncFunc3");
      a=new Date().getTime()/1000
      console.log(a)
      //Async3 function code
      setTimeout(() => {
        console.log("Completed asyncFunc3");
        a=new Date().getTime()/1000
        console.log(a)
      }, 5000);
    }, 5000);
  }, 10000);
}
//asyncFunc()
const promiseArr = asyncArr.map((async) => async());
finalResolution = Promise.all(promiseArr);
finalResolution
  .then((output) => {
    for (let data of output) {
      console.log(data);
    }
  })
  .catch((err) => console.log(err));