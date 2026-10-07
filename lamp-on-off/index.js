document.querySelector('button').onclick = () => {
    if(document.querySelector('button').innerText === 'OFF') {

document.querySelector('img').attributes.src.value='image/off.png';
document.querySelector('button').innerText = 'ON';

}
else{
document.querySelector('img').attributes.src.value='image/on.png';
document.querySelector('button').innerText = 'OFF';
}
}