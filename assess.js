//Given a string, find the reverse of it.
arr=[1,2,3,1,3,5,33,1,8,6,1]
function reversestring(s){
    var string=s
    a=[]
    for(i=string.length;i>-1;i--){
        a.push(string[i])
    }

    console.log(a.join(''))
}


function replacestring(string){
    text=string
    text.replace()
}

function student(a){
    k=a.indexOf(3)

    return k
}
console.log(student(arr))

function requestManager(url, attempts = 3) {
    return new Promise(async (resolve, reject) => {
        for (let i = 0; i < attempts; i++) {
            try {
                const response = await fetch(url);
                resolve(response);
                break;
            } catch (err) {
                if (attempts - 1 === i) {
                    reject(err);
                    break;
                }
                await new Promise(resolve => setTimeout(resolve, 1000 + 1000 * i));
            }
        }
    });
}

// driver code
requestManager('https://reqbin.com/echo/get/json', 3).then(
    response => console.log(response),
    error => console.log(error)
);