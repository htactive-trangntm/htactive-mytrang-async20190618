let add = (a,b)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            if(typeof a!= "number"|| typeof b!="number"){
                return reject( new Error("tham số truyền vào phải là số chứ ko cộng đc"));
            }
            return resolve(a+b);
        }, 2000);
    });
}

let multiply = (a,b)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            if(typeof a!= "number"|| typeof b!="number"){
                return reject( new Error("tham số truyền vào phải là số chứ ko nhân được"));
            }
            return resolve(a*b);
        }, 1000);
    });
}

Promise.all([add(4,"5"),multiply(4,"5")])
.then(res=>console.log(res))
.catch(err=>console.log(err+""))

Promise.race([add(4,5),multiply(4,"7")])
.then(res=>console.log(res))
.catch(err=>console.log(err+""))

