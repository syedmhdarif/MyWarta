export const convertToSimpleFormat = (isoString: string): string => {
  //   const date = new Date(isoString);
  //   const year = date.getFullYear();
  //   const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-indexed
  //   const day = String(date.getDate()).padStart(2, '0');

  const epochTimestamp = isoString; // This corresponds to July 1, 2021

  // Create a Date object from the Epoch timestamp
  const date = new Date(epochTimestamp);

  // Extract date and time information
  const year = date.getFullYear();
  let month: any = date.getMonth() + 1; // Months are zero-indexed
  const day = date.getDate();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  // const seconds = date.getSeconds();
  // const milliseconds = date.getMilliseconds();

  if (month === 1) {
    month = 'January';
  } else if (month === 2) {
    month = 'February';
  } else if (month === 3) {
    month = 'March';
  } else if (month === 4) {
    month = 'April';
  } else if (month === 5) {
    month = 'May';
  } else if (month === 6) {
    month = 'June';
  } else if (month === 7) {
    month = 'July';
  } else if (month === 8) {
    month = 'August';
  } else if (month === 9) {
    month = 'September';
  } else if (month === 10) {
    month = 'October';
  } else if (month === 11) {
    month = 'November';
  } else if (month === 12) {
    month = 'December';
  } else null;

  const period = hours >= 12 ? 'pm' : 'am';
  const newhours = hours % 12 || 12; // Convert hour '0' to '12'

  // Format the date and time as desired
  const formattedDate = `${String(day).padStart(2, '0')} ${month} ${year}`;
  const formattedTime = `${String(newhours).padStart(2, '0')}:${String(
    minutes,
  ).padStart(2, '0')} ${period}`;

  const result = formattedDate;
  return result;

  //   return `${year}/${month}/${day}`;
};

export const epochTimeStamp = (epochtime: any): any => {
  // Example Epoch timestamp in milliseconds
  const epochTimestamp = epochtime; // This corresponds to July 1, 2021

  // Create a Date object from the Epoch timestamp
  const date = new Date(epochTimestamp);

  // Extract date and time information
  const year = date.getFullYear();
  let month: any = date.getMonth() + 1; // Months are zero-indexed
  const day = date.getDate();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  // const seconds = date.getSeconds();
  // const milliseconds = date.getMilliseconds();

  if (month === 1) {
    month = 'January';
  } else if (month === 2) {
    month = 'February';
  } else if (month === 3) {
    month = 'March';
  } else if (month === 4) {
    month = 'April';
  } else if (month === 5) {
    month = 'May';
  } else if (month === 6) {
    month = 'June';
  } else if (month === 7) {
    month = 'July';
  } else if (month === 8) {
    month = 'August';
  } else if (month === 9) {
    month = 'September';
  } else if (month === 10) {
    month = 'October';
  } else if (month === 11) {
    month = 'November';
  } else if (month === 12) {
    month = 'December';
  } else null;

  const period = hours >= 12 ? 'pm' : 'am';
  const newhours = hours % 12 || 12; // Convert hour '0' to '12'

  // Format the date and time as desired
  const formattedDate = `${String(day).padStart(2, '0')} ${month} ${year}`;
  const formattedTime = `${String(newhours).padStart(2, '0')}:${String(
    minutes,
  ).padStart(2, '0')}${period}`;

  const result = formattedDate + ', ' + formattedTime;
  return result;
};
