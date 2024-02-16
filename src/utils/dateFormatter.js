export default function changeDateFormat(date) {
  const time = new Date(date);
  const options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    hour12: false,
    timeZone: 'Asia/Jakarta',
    second: 'numeric',
  };
  const localeID = 'id-ID';
  return time.toLocaleDateString(localeID, options).replace(/\./g, ':');
}
