localStorage.setItem("username", "prince");
localStorage.setItem("email", "prince@gmail.com");
localStorage.setItem("age", "30");

console.log(localStorage);
console.log(localStorage.getItem("username"));
console.log(localStorage.getItem("email"));
console.log(localStorage.getItem("age"));

localStorage.clear();

localStorage.setItem("username", "prince");
localStorage.setItem("email", "prince@gmail.com");
localStorage.setItem("age", "30");

console.log(localStorage.getItem("username"));
console.log(localStorage.getItem("email"));
console.log(localStorage.getItem("age"));

localStorage.removeItem("age");

console.log(localStorage);
