    document.querySelector("h1").innerHTML = localStorage.getItem("username");
    document.querySelector(".avatar").innerHTML = localStorage.getItem("username")[0];

    
    document.querySelector("#signout").onclick = ()=>{
        localStorage.removeItem("username");
        localStorage.removeItem("password");
    }