function watch(){
    let min = 5;
let sec = 60;

document.getElementById("min").innerHTML = min;
min--;
setTimeout(() => {
    document.querySelector("#min").innerHTML = min;
}, 1000);

let id = setInterval(() => {
    sec--;
    if (sec < 0) {
        sec = 59;
        min--;
        document.querySelector("#min").innerHTML = min;
    }
    else if (min == 0 && sec == 0) {
        clearInterval(id);
        // document.querySelector("#min").innerHTML = "Time's Up";
        // document.querySelector("#sec").innerHTML = "";
    }
    document.querySelector("#sec").innerHTML = sec;
}, 1000);


document.getElementById("stop").onclick = function () {
    clearInterval(id);
}
}
watch();
document.getElementById("start").onclick = function () {
    min = 5;
    sec = 60;
    watch();
}