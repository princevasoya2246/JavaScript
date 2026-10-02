var arr = ["https://up.yimg.com/ib/th/id/OIP.X4XxvqYxsq5TAfWelPmJ2QHaEK?pid=Api&rs=1&c=1&qlt=95&w=192&h=107", "https://up.yimg.com/ib/th/id/OIP.XM6n71Lpzh8sQXusdXQVGwHaEo?pid=Api&rs=1&c=1&qlt=95&w=172&h=107", "https://up.yimg.com/ib/th/id/OIP.ZaSf7GzYb3lmQzzGwXNG4gHaEK?pid=Api&rs=1&c=1&qlt=95&w=218&h=122", "https://up.yimg.com/ib/th/id/OIP.nklorQdjLJuloRgMo2ieYAHaEo?pid=Api&rs=1&c=1&qlt=95&w=196&h=122", "https://up.yimg.com/ib/th/id/OIP.vZYvtW-rkb_go936ajlx1AHaEo?pid=Api&rs=1&c=1&qlt=95&w=196&h=122", "https://up.yimg.com/ib/th/id/OIP.o0-_5Yz2Vr32GtIPXUKTLQHaEo?pid=Api&rs=1&c=1&qlt=95&w=197&h=123", "https://up.yimg.com/ib/th/id/OIP.5ax9dhXJofNLkjF4BBa6CAHaEJ?pid=Api&rs=1&c=1&qlt=95&w=220&h=123", "https://up.yimg.com/ib/th/id/OIP.uCSSpsHBRsUUqtMI_cgd7QHaEt?pid=Api&rs=1&c=1&qlt=95&w=194&h=123", "https://up.yimg.com/ib/th/id/OIP.K2JBAcsV5qefM1QflYHdcwHaEO?pid=Api&rs=1&c=1&qlt=95&w=175&h=100", "https://up.yimg.com/ib/th/id/OIP.MFMV8Jt7BMqDb2ebCtaDRwHaEK?pid=Api&rs=1&c=1&qlt=95&w=178&h=100", "https://up.yimg.com/ib/th/id/OIP.FtKgl4qMggYglbs_JLE6tgHaE1?pid=Api&rs=1&c=1&qlt=95&w=154&h=101"];
let index = 0;

document.getElementById("sec1").style.backgroundImage = `url(${arr[index]})`;
document.getElementById("lbtn").onclick = function () {
    index--;
    if (index < 0) {
        index = arr.length - 1;
    }
    document.getElementById("sec1").style.backgroundImage = `url(${arr[index]})`;
}
document.getElementById("rbtn").onclick = function () {
    index++;
    if (index >= arr.length) {
        index = 0;
    }
    document.getElementById("sec1").style.backgroundImage = `url(${arr[index]})`;
}