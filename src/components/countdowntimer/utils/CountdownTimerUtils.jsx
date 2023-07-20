// Dayjs Library
import dayjs from 'dayjs';

// Receive timestamp in ms as argument and return time left until timestamp
export function getRemainingTimeUntilMsTimestamp(timestampMs) {
    // Dayjs object containing the final moment of time of the countdown timer
    const timestampDayjs = dayjs(timestampMs);
    // Current moment of time object
    const nowDayjs = dayjs();

    return {
        seconds: getRemainingSeconds(nowDayjs, timestampDayjs),
        minutes: getRemainingMinutes(nowDayjs, timestampDayjs),
        hours: getRemainingHours(nowDayjs, timestampDayjs),
        days: getRemainingDays(nowDayjs, timestampDayjs)
    }
}

// Receive current and final dayjs objects and calculate the difference in seconds between both objects
function getRemainingSeconds(nowDayjs, timestampDayjs) {
    // % 60 to make sure seconds does not go over 60 seconds
    const seconds = timestampDayjs.diff(nowDayjs, 'seconds') % 60;
    return seconds;
}
 
// Receive current and final dayjs objects and calculate the difference in minutes between both objects
function getRemainingMinutes(nowDayjs, timestampDayjs) {
    const minutes = timestampDayjs.diff(nowDayjs, 'minutes') % 60;
    return minutes;   
}
 
// Receive current and final dayjs objects and calculate the difference in hours between both objects
function getRemainingHours(nowDayjs, timestampDayjs) {
    const hours = timestampDayjs.diff(nowDayjs, 'hours') % 24;
    return hours;
}
 
// Receive current and final dayjs objects and calculate the difference in days between both objects
function getRemainingDays(nowDayjs, timestampDayjs) {
    const days = timestampDayjs.diff(nowDayjs, 'days');
    return days;
}
 