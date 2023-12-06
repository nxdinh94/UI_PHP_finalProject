import { useEffect, useState } from 'react';

function CountDown({ countDownDate }) {
    const [resultDate, setResultDate] = useState('');
    const countdonw = (countDownDate) => {
        var now = new Date().getTime();
        // console.log('new', now);

        // Find the distance between now an the count down date
        var distance = countDownDate - now;
        // Time calculations for days, hours, minutes and seconds
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Output the result in an element with id="demo"
        setResultDate(hours + 'h ' + minutes + 'm ' + seconds + 's ');

        // If the count down is over, write some text
        // if (distance < 0) {
        //     setResultDate(hours + 'h ' + minutes + 'm ' + seconds + 's ');
        // }

        // Get todays date and time
    };

    useEffect(() => {
        setInterval(() => {
            countdonw(countDownDate);
        }, 1000);
        return () => {
            clearInterval();
        };
    }, []);
    return <>{resultDate}</>;
}

export default CountDown;
