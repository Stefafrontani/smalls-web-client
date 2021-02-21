/**
 * @function getTimePassedFromDate - Given a date in milliseconds or seconds, the funcion gives you back an object containing total passed tmie in different units and a foramtted way of seeing the time passed between date passed and now
 * @param {number} date - The date which will be used to calculate the time passed until now
 * @return {object} - { timePassed, formattedTimePassed }: timePassed will be an object containing the time passed from `date` in different units and formattedTimePassed will be a string telling how many days and hours passed
 */

function getTimePassedFromDate(date) {
  if (!date) {
    return {}
  }
  if (typeof date !== 'number') {
    console.error('You should be calling `getTimePassedFromDate` with a date in millisecs or seconds')
    return {};
  }
  
  let dateInMillisecs;

  const stringifiedDate = date.toString()
  const dateInSeconds = stringifiedDate.length === 10;
  if (dateInSeconds) {
    dateInMillisecs = stringifiedDate + '000';
  } else {
    dateInMillisecs = stringifiedDate;
  }

  dateInMillisecs = Number(dateInMillisecs);
  const datePassed = new Date(dateInMillisecs)
  const today = new Date()
  
  const millisecsPassed = today - datePassed;
  const secsPassed = millisecsPassed/1000;
  const minsPassed = secsPassed/60;
  const hoursPassed = minsPassed/60;
  const daysPassed = hoursPassed/24;
  
  const timePassed = {
    days: daysPassed,
    hours: hoursPassed,
    mins: minsPassed,
    secs: secsPassed,
    millisecs: millisecsPassed
  }

  const integerDaysPassed = Math.floor(timePassed.days)
  const integerHoursPassed = Math.floor((timePassed.hours) - (integerDaysPassed*24))

  const isARecentDate = Boolean(timePassed.hours < 1)
  
  return {
    timePassed: timePassed,
    formatTimePassed: isARecentDate
      ? 'Less than 1 hour ago'
      : `Published ${integerDaysPassed ? `${integerDaysPassed} day(s)` : ''} ${integerHoursPassed ? `${integerHoursPassed} hours(s)` : ''} ago`
  }
}

export {
  getTimePassedFromDate
}