let quotes=document.querySelector(".quotes");
let authorName=document.querySelector(".authorName");
let btn = document.querySelector(".next");

btn.addEventListener('click', ()=>{
    let quo=fetch('https://dummyjson.com/quotes').then((value) => {
        return value.json();
    }).then((value) => {
        let ran=Math.floor(Math.random()*value.quotes.length);
        quotes.innerHTML=value.quotes[ran].quote;
        authorName.innerHTML=value.quotes[ran].author;
        console.log()
    }).catch((value) => {
        console.log(value)
    })
})
