function getData(url, callback) {

    const request = new XMLHttpRequest(); // state: 0

    request.open('GET', url);// state: 1
    request.send(); // state: 2

    request.addEventListener('readystatechange', ()=> {
        if(request.readyState == 4 && request.status == 200) {
            const data = JSON.parse(request.responseText);
            callback(undefined, data);
        }
        else if(request.readyState == 4) {
            callback(request.status, undefined);
        }
});
}



getData('../JSON file/todos/arijit.json'), (err, data)=>{
    console.log(data);

    getData('todos/atif.json', (err, data)=>{
        console.log(data);

        getData('todos/kailash.json', (err, data)=>{
            console.log(data);
        });
        
    });
  
});