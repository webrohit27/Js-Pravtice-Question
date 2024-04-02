fetch('../creating JSON file/todos/atif.json').then((response)=>{
    
    return response.json();   // returns a promise
}).then((data)=>{
    console.log(data);
}).catch((err)=>{
    console.log(err);
})


fetch('../JSON file/todos/arijit.json').then((response)=>{
    return response.json();
}).then((data)=>{
    console.log(data)
}).catch((err)=>{
    console.log(err);
})