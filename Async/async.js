async function getData(){

    const response = await fetch("Url");

    const data = await response.json();

    return data;

};

getData().then((data)=>{
    console.log(data);
}).catch((error)=>{
    console.log(error);
})