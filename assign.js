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
//const promiseArr = asyncArr.map((async) => async());
//finalResolution = Promise.all(promiseArr);
//finalResolution
 // .then((output) => {
   // for (let data of output) {
    //  console.log(data);
   // }
  //})
  //.catch((err) => console.log(err));

//const promiseArr = asyncArr.map((async) => async());
//finalResolution = Promise.allSettled(promiseArr);
//finalResolution
//  .then((output) => {
 //   for (let data of output) {
 //     if (data.status === "fulfilled")
 //       console.log(data.status + ": " + data.value);
  //    else if (data.status === "rejected")
  //      console.log(data.status + ": " + data.reason);
  //  }
  //})
  //.catch((err) => {
  //  console.log(err);
 // });

  //Promise.race(promiseArr).then(console.log).catch(console.log); // Rejected async3 (catch block)
  function* generatorFunc(param) {
    const num1 = yield;
    return num1;
  }
  // driver code
  //const it = generatorFunc();
  //it.next(); // { value: undefined, done: false}
  //k=it.next(3); // { value: undefined, done: false}
  //v=it.next(2)
  //v=it.next(2)
 // v=it.next(2)
 // { value: 8, done: true }
  //console.log(v.value)
  const a = [1, 2, 3, 4, 5];
const b = [4, 0, 0, 0, 8];

const startPositionFor1stArray = a.length / 2 - 1;
const startPositionFor2ndArray = b.length / 2 - 1;
a.splice(startPositionFor1stArray, 3, ...b.slice(startPositionFor2ndArray, startPositionFor2ndArray + 3));


const n = 5;
const arr = new Array(n);
arr.fill(10);
//console.log(arr)

const min = Math.min(...arr);
minArr = arr.filter((value) => value === min);
//console.log(minArr.length)

//const arra = [1, 2, 3, 4, 5,1,2];
//const set = new Set(...arra);
//const distinctArr = [...set];

Array.prototype.average = function (){
  let total = 0;

  for(let index in this) {
    total += this[index];
  }
  return total / this.length;
}
var o=[1,2,3,4,5,1,2,3,8,9]
console.log(o.average())
// Example
const arri = [
  {
      id: 1,
      name: 'emp1',
      rank: 4,
  },
  {
      id: 2,
      name: 'emp2',
      rank: 1,
  },
  {
      id: 2,
      name: 'emp2',
      rank: 2,                // this is a duplicate object (id = 2) and has lower rank 
  },
  {
      id: 3,
      name: 'emp3',
      rank: 3,
  },
];
//const map = new Map();

//arri.forEach((a)=>{
//  if(map.has(a.id)){
//if(a.rank>map.get(a.id).rank){
 // map.set(a.id,a)
//}
 // }
  //else{
  //  map.set(a.id,a)
  //}
//})
//console.log([...map.values()])
const set1 = new Set(...arri);
const set2 = new Set(...arri);
const distinctArr = [...set1, ...set2];
console.log(distinctArr)