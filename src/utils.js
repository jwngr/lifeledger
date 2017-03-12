export function padWithZero(value) {
  if (value < 10) {
    return `0${value}`;
  } else {
    return value;
  }
}

export function getImageKey(day, month, year) {
  return `${year}-${padWithZero(month)}-${padWithZero(day)}`;
}

export function getSecondsFromTime(time) {
  var tokens = time.split(":");

  let hoursCount = 0;
  let minutesCount = 0;
  let secondsCount = 0;
  if (tokens.length === 2) {
    [minutesCount, secondsCount] = tokens;
  } else {
    [hoursCount, minutesCount, secondsCount] = tokens;
  }

  hoursCount = parseInt(hoursCount, 10);
  minutesCount = parseInt(minutesCount, 10);
  secondsCount = parseInt(secondsCount, 10);

  return (hoursCount * 60 * 60) + (minutesCount * 60) + secondsCount;
}

export function getFormattedTimeFromSeconds(value) {
  const hoursCount = Math.floor(value / 3600);
  const minutesCount = padWithZero(Math.floor(value / 60 % 60));
  const secondsCount = padWithZero(Math.floor(value % 60));

  return `${hoursCount}:${minutesCount}:${secondsCount}`
}

export function getRegularTime(militaryTime) {
  const [hour, minute] = militaryTime.split(':').map(token => parseInt(token, 10));

  if (hour > 12) {
    if (minute < 10) {
      return `${hour - 12}:0${minute} PM`;
    } else {
      return `${hour - 12}:${minute} PM`;
    }
  } else if (hour === 12) {
    return `${militaryTime} PM`;
  } else {
    return `${militaryTime} AM`;
  }
}

export function getNumberWithCommas(value) {
  var parts = value.toString().split(".");
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return parts.join(".");
}
