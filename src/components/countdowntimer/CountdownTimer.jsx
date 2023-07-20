// React Hooks
import { useEffect, useState } from 'react';

// Utils
import { getRemainingTimeUntilMsTimestamp } from './utils/CountdownTimerUtils';

// Styles
import './CountdownTimer.css'
// Supports weights 200-700
import '@fontsource-variable/oswald';

// Initial State Object
const defaultRemainingTime = {
    seconds: '00',
    minutes: '00',
    hours: '00',
    days: '00'
}

// Takes in the prop that holds the timestamp in ms when the countdown is over
function CountdownTimer({ countdownTimestampMs }) {
    const [remainingTime, setRemainingTime] = useState(defaultRemainingTime);

    useEffect(() => {
        // Contents of useEffect are only called when component is mounted
        // When useEffect is called, setInterval runs its contents every second
        // In order to stop it, first must store the return value into intervalId
        const intervalId = setInterval(() => {
            updateRemainingTime(countdownTimestampMs);
        }, 1000);
        // Then, unmount the component with clearInterval to stop the interval from running
        return () => clearInterval(intervalId);
        // Needs to be added as a dependency since it is a prop and so when its value changes the useEffect will trigger
    }, [countdownTimestampMs]);

    // Update remainingTime state
    function updateRemainingTime(countdown) {
        setRemainingTime(getRemainingTimeUntilMsTimestamp(countdown)); 
    }

    return (
        <div className="countdown-timer"> 
            <span>{remainingTime.days}</span>
            <span>days</span>
            <span className='two-numbers'>{remainingTime.hours}</span>
            <span>hours</span>
            <span className='two-numbers'>{remainingTime.minutes}</span>
            <span>minutes</span>
            <span className='two-numbers'>{remainingTime.seconds}</span>
            <span>seconds</span>
        </div>
    )
}

export default CountdownTimer