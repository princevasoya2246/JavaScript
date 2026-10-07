document.querySelector("button").onclick = function(event) {
    event.preventDefault();
    
    if(document.querySelectorAll("input")[0].value == "") {
        document.querySelectorAll("p")[0].style.color = 'red';
        return;
    }
    if(document.querySelectorAll("input")[1].value == "") {
        document.querySelectorAll("p")[1].style.color = 'red';
        return;
    }
    if(document.querySelectorAll("input")[2].value.includes("@gmail.com") == "") {
        document.querySelectorAll("p")[2].style.color = 'red';
        return;
    }
    if(document.querySelectorAll("input")[3].value == "") {
        document.querySelectorAll("p")[3].style.color = 'red';
        return;
    }
    if(document.querySelectorAll("input")[4].value == ""||document.querySelectorAll("input")[3].value!=document.querySelectorAll("input")[4].value) {
        document.querySelectorAll("p")[4].style.color = 'red';
        return;
    }
    
    const formdata = {
        fname : document.querySelectorAll("input")[0].value,
        lname : document.querySelectorAll("input")[1].value,
        email : document.querySelectorAll("input")[2].value,
        password : document.querySelectorAll("input")[3].value,
        confirmPassword : document.querySelectorAll("input")[4].value,
    };

     console.log(formdata);
}