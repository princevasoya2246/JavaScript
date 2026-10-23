const questions = [
    {
        qns: "Which keyword is used to declare a variable in JavaScript?",
        options: ["var", "int", "string", "define"],
        ans: "var"
    },
    {
        qns: "Which method is used to print output in the browser console?",
        options: ["console.log()", "print()", "write()", "display()"],
        ans: "console.log()"
    },
    {
        qns: "Which symbol is used for a single-line comment in JavaScript?",
        options: ["//", "/*", "#", "<!--"],
        ans: "//"
    },
    {
        qns: "Which data type is used to store true or false?",
        options: ["String", "Boolean", "Number", "Object"],
        ans: "Boolean"
    },
    {
        qns: "Which operator is used for strict equality in JavaScript?",
        options: ["==", "=", "===", "!="],
        ans: "==="
    }
];
let sec = 10;
var index = 0;
var corrects = 0;
var incorrects = 0;
var id;
var username = prompt("Enter your name :");

let timer = function () {
    document.querySelector(".timer .second").innerHTML = sec;
    id = setInterval(function () {
        sec--;
        if (sec == 0) {
            index++;
            checkAnswer();
            getQuestion();
            clearInterval(id);
            sec = 10;
            return;
        }
        document.querySelector(".timer .second").innerHTML = sec;
    }, 1000);
}
let checkAnswer = function () {
    var useropt;

    if (document.querySelectorAll('.op input')[0].checked) {
        useropt = document.querySelectorAll('.op input')[0].value;
    } else if (document.querySelectorAll('.op input')[1].checked) {
        useropt = document.querySelectorAll('.op input')[1].value;
    } else if (document.querySelectorAll('.op input')[2].checked) {
        useropt = document.querySelectorAll('.op input')[2].value;
    } else if (document.querySelectorAll('.op input')[3].checked) {
        useropt = document.querySelectorAll('.op input')[3].value;
    }
    console.log(useropt);
    (questions[index - 1].ans == useropt) ? document.querySelector('.correct').innerHTML = ++corrects : document.querySelector('.incorrect').innerHTML = ++incorrects;

}


let getQuestion = function () {
    timer();
    if (index >= questions.length) {
        document.querySelector("button").disabled = true;
        result();
        return;
    }
    document.querySelector(".qs i").innerHTML = index + 1;
    document.querySelector(".qs span").innerHTML = questions[index].qns;
    for (const i in questions[index].options) {
        document.querySelectorAll("aside")[i].children[0].checked = false;
        document.querySelectorAll("aside")[i].children[0].value = questions[index].options[i];
        document.querySelectorAll("aside")[i].children[1].innerHTML = questions[index].options[i];
    }
}
getQuestion();
document.querySelector(".btn button").onclick = function () {
    clearInterval(id);
    sec = 10;
    index++;
    checkAnswer();
    getQuestion();

}

var result = function () {
    document.querySelector("article").style.display = "none";
    document.querySelector(".result").style.display = "block";
    document.querySelector(".result h1").innerHTML = username;
    document.querySelector("h2 span").innerHTML = corrects;



    

}

document.querySelector(".yes").onclick = function () {
    console.log("fgh")
        document.querySelector(".result").style.display = "none";
        document.querySelector("article").style.display = "block";

        sec = 10;
        index = 0;
        corrects = 0;
        incorrects = 0;
        // username = prompt("Enter your name :");
document.querySelector('.correct').innerHTML=0;
document.querySelector('.incorrect').innerHTML =0;
        document.querySelector("button").disabled = false;

        getQuestion();

    }
    document.querySelector(".no").onclick = function () {
         document.querySelector("article").style.display = "none";
    document.querySelector(".result").style.display = "none";
        document.querySelector(".q").innerHTML="Game over";
      
    }