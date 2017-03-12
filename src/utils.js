export function getImageKey(day, month, year) {
  let key = `${year}-`;

  if (month < 10) {
    key += `0${month}-`;
  } else {
    key += `${month}-`;
  }

  if (day < 10) {
    key += `0${day}`;
  } else {
    key += day;
  }

  return key;
}

export function getFormattedTime(militaryTime) {
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
