/**
 * @file Countdown.jsx
 * @author Sanjay Sunil
 * @license GPL-3.0
 */

import './Countdown.css';

const Countdown = () => {
    var currentYear = new Date().getFullYear();
    var target_date = new Date("Dec 25, " + currentYear).getTime();

    var d = new Date();

    var numD = d.getDate();
    console.log(numD)

    var days, hours, minutes, seconds;

    var countdown = document.getElementById("daycount");
    var title = document.getElementById('title');

    setInterval(function () {

        var current_date = new Date().getTime();
        var seconds_left = (target_date - current_date) / 1000;

        days = parseInt(seconds_left / 86400);
        seconds_left = seconds_left % 86400;

        hours = parseInt(seconds_left / 3600);
        seconds_left = seconds_left % 3600;

        minutes = parseInt(seconds_left / 60);
        seconds = parseInt(seconds_left % 60);

        if (numD == 25) {
            title.innerHTML = "Merry Christmas!";
            title.style.fontSize = '5vh';
            countdown.style.fontSize = '2vh';
            countdown.innerHTML = "and a Happy New Year!";
        }

        else if (days < 0) {
            title.innerHTML = "Christmas was "+-1*(days)+" days ago."
            countdown.innerHTML = "";
        }

        else if (days > 0) {
            title.innerHTML = "Christmas Countdown"
            countdown.innerHTML = days + "d " + hours + "h "
            + minutes + "m " + seconds + "s ";
        }

        else {
            title.innerHTML = "Christmas Countdown"
            countdown.innerHTML = days + "d " + hours + "h "
            + minutes + "m " + seconds + "s ";
        }
        
    }, 0);
}

export default Countdown;