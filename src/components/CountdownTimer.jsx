// React Hooks
import { useEffect, useState } from 'react';

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

function CountdownTimer() {
    const [remainingTime, setRemainingTime] = useState(defaultRemainingTime);

    useEffect(() => {
        // Contents of useEffect are only called when component is mounted
        // When useEffect is called, setInterval runs its contents every second
        // In order to stop it, first must store the return value into intervalId
        const intervalId = setInterval(() => {
            updateRemainingTime();
        }, 1000);
        // Then, unmount the component with clearInterval to stop the interval from running
        return () => clearInterval(intervalId);
    }, []);

    // Update remainingTime state
    function updateRemainingTime() {
        // Testing if function works
        console.log("Hello World");
    }

    return (
        <div className="countdown-timer"> 
            <span>{remainingTime.days}</span>
            <span>days</span>
            <span>{remainingTime.hours}</span>
            <span>hours</span>
            <span>{remainingTime.minutes}</span>
            <span>minutes</span>
            <span>{remainingTime.seconds}</span>
            <span>seconds</span>
        </div>
    )
}
export default CountdownTimer