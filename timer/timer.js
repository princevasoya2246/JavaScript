let count=0;

document.querySelector("span").innerHTML=count;






// setTimeout(()=>{
//     count++;
//     document.querySelector("span").innerHTML=count;
// },1000);

var id=setInterval(()=>{
    count++;
     if(count == 10){
                clearInterval(id);
            }
    document.querySelector("span").innerHTML=count;
},1000);