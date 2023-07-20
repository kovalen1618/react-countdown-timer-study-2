// Dayjs Library
import dayjs from 'dayjs';

// Receive timestamp in ms as argument and return time left until timestamp
export function getRemainingTimeUntilMsTimestamp(timestampMs) {
    // Dayjs object containing the final moment of time of the countdown timer
    const timestampDayjs = dayjs(timestampMs);
    // Current moment of time object
    const nowDayjs = dayjs();

    // Checks if timestamp is in the past
    if (timestampDayjs.isBefore(nowDayjs)) {
        // If it is in the past, return 0s instead of default negative values
        return {
            seconds: '00',
            minutes: '00',
            hours: '00',
            days: '00'
        }
    }

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
    // String minLength is 2
    return padWithZeroes(seconds, 2);
}
 
// Receive current and final dayjs objects and calculate the difference in minutes between both objects
function getRemainingMinutes(nowDayjs, timestampDayjs) {
    const minutes = timestampDayjs.diff(nowDayjs, 'minutes') % 60;
    return padWithZeroes(minutes, 2);   
}
 
// Receive current and final dayjs objects and calculate the difference in hours between both objects
function getRemainingHours(nowDayjs, timestampDayjs) {
    const hours = timestampDayjs.diff(nowDayjs, 'hours') % 24;
    return padWithZeroes(hours, 2);
}
 
// Receive current and final dayjs objects and calculate the difference in days between both objects
function getRemainingDays(nowDayjs, timestampDayjs) {
    const days = timestampDayjs.diff(nowDayjs, 'days');
    return days.toString();
}
 
// Receives the time magnitude (i.e. days, hours, minutes, seconds) and how long it should appear in the string
function padWithZeroes(timeMagnitude, minLength) {
    const timeMagnitudeString = timeMagnitude.toString();

    // If the string is already what is desired (35 minutes or 03 seconds) then its fine
    if (timeMagnitudeString.length >= minLength) return timeMagnitudeString;

    // Subtrack timeMagnitudeString.length from minLength to get how many 0s need to be added through concatenation
    return "0".repeat(minLength - timeMagnitudeString.length) + timeMagnitudeString;
}