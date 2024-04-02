
function getTodos(callback){
    const request = new XMLHttpRequest(); // state 0

    request.open('GET','todos/songs.json'); 
    request.send(); 
    
    
    
    request.addEventListener('readystatechange', ()=>{
      if(request.readyState == 4 && request.status == 200){
       callback(undefined, request.responseText);
      }
      else if(request.readyState == 4){
        callback(request.status, undefined);
      }
    });
}

getTodos((err, data) =>{
    if(data){
        console.log(data);
    }
    else{
        console.log(err);
    }

});






