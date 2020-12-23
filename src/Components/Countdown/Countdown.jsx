const Countdown = () => {
    // set the date we're counting down to
    var currentYear = new Date().getFullYear();
    var target_date = new Date("Dec 25, " + currentYear).getTime();

    var d = new Date();

    var numD = d.getDate();
    console.log(numD)

    // variables for time units
    var days, hours, minutes, seconds;

    // get tag element
    var countdown = document.getElementById("daycount");
    var title = document.getElementById('title');

    // update the tag with id "countdown" every 1 second
    setInterval(function () {

        // find the amount of "seconds" between now and target
        var current_date = new Date().getTime();
        var seconds_left = (target_date - current_date) / 1000;

        // do some time calculations
        days = parseInt(seconds_left / 86400);
        seconds_left = seconds_left % 86400;

        hours = parseInt(seconds_left / 3600);
        seconds_left = seconds_left % 3600;

        minutes = parseInt(seconds_left / 60);
        seconds = parseInt(seconds_left % 60);

        if (days == 0 && numD == 24) {
            title.innerHTML = "Tommorrow is Christmas!";
        }

        else if (days == 0 ) {
            title.innerHTML = "Merry Christmas!";
            countdown.innerHTML = "";
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
        
    }, 0);
}

export default Countdown;