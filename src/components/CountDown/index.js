import { useEffect, useState } from 'react';

function CountDown({ periodTime, registerDate }) {
    // console.log(periodTime, registerDate);
    const [resultDate, setResultDate] = useState('');

    const arrayDate = registerDate.split('-');
    let convertTimeEnd = '';
    let convertTimeStart = '';
    let monthToText = '';

    switch (periodTime) {
        case 1:
            convertTimeStart = `7:00:00`;
            convertTimeEnd = `11:00:00`;
            break;
        case 2:
            convertTimeStart = `13:00:00`;
            convertTimeEnd = `17:00:00`;
            break;
        case 3:
            convertTimeStart = `7:00:00`;
            convertTimeEnd = `17:00:00`;
            break;

        default:
            convertTimeEnd = `17:00:00`;
    }
    switch (arrayDate[1]) {
        case '12':
            monthToText = 'December';
            break;
        case '01' || '1':
            monthToText = 'January';
            break;
        case '02' || '2':
            monthToText = 'February';
            break;
        case '03' || '3':
            monthToText = 'March';
            break;
        case '04' || '4':
            monthToText = 'April';
            break;
        case '05' || '5':
            monthToText = 'May';
            break;
        case '06' || '6':
            monthToText = 'June';
            break;
        case '07' || '7':
            monthToText = 'July';
            break;
        case '08' || '8':
            monthToText = 'August';
            break;
        case '09' || '9':
            monthToText = 'September';
            break;
        case '10':
            monthToText = 'October';
            break;
        case '11':
            monthToText = 'November';
            break;
        default:
            console.log(typeof arrayDate[1]);
    }
    const customeDateTimeEnd = `${monthToText} ${arrayDate[2]}, ${arrayDate[0]} ${convertTimeEnd}`;
    const customeDateTimeStart = `${monthToText} ${arrayDate[2]}, ${arrayDate[0]} ${convertTimeStart}`;

    function secondsToHMS(seconds) {
        const hours = Math.floor(seconds / 3600);
        const minutes = Math.floor((seconds % 3600) / 60);
        const remainingSeconds = seconds % 60;

        const formattedTime = `${hours}h ${String(minutes).padStart(2, '0')}m ${String(remainingSeconds).padStart(
            2,
            '0',
        )}s`;

        return formattedTime;
    }

    const countdonw = () => {
        const futureDateEnd = new Date(customeDateTimeEnd);
        const futureDateStart = new Date(customeDateTimeStart);

        // Thời điểm hiện tại
        const currentDate = new Date();

        if (futureDateStart - currentDate <= 0) {
            // console.log(futureDateStart - currentDate);
            const timeDifferenceInSeconds = Math.floor((futureDateEnd - currentDate) / 1000);
            let result = secondsToHMS(timeDifferenceInSeconds);
            setResultDate(result);
        } else {
            setResultDate('Dịch vụ chưa được sử dụng');
            return;
        }
        if (futureDateEnd - currentDate < 0) {
            setResultDate('Dịch vụ quá hạn');
            return;
        }
    };

    useEffect(() => {
        setInterval(() => {
            countdonw();
        }, 1000);
        return () => {
            clearInterval();
        };
    }, []);
    return <>{resultDate}</>;
}

export default CountDown;
