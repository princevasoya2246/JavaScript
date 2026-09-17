var istrue = true;
while (istrue) {
    var number = Math.floor(Math.random() * 100);

    var count = 10;
    while (true) {
        count--;
        if (count == 0) {
            alert("You have run out of guesses!");
            break;
        }
        var n = Number(prompt("enter a number 1 and 100: "));
        if (n > number) {
            alert(`guess the number is smaller (remaining guesses: ${count})`);
        } else if (n == number) {
            alert("correct!");
            break;
        } else {
            alert(`guess the number is larger (remaining guesses: ${count})`);
        }
    }
    var istrue = confirm("Do you want to play again?");
}