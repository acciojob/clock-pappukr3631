//your JS code here. If required.
let amPm = "";
function hour(h) {
    if(h<12) {
        amPm = "AM";
        return h;
    }
    if(h==12) {
        amPm = "PM";
        return 12;
    }
    amPm = "PM";

    h = h - 12;
    return h;
}

function timer() {
    let timer = document.getElementById("timer");
    let d = new Date();

    let date = `${d.getMonth()}/${d.getDate()}/${d.getFullYear()}, `;

    let time = `${hour(d.getHours())}:${d.getMinutes()}:${d.getSeconds()} ${amPm}`;

    timer.innerText = date+time;
}

setInterval(timer,1000);