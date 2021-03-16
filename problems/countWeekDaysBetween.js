// Count the number of days between two date

const countWeekDays = (startDate, endDate) => {
  return Array.from({
    length: (endDate - startDate) / (1000 * 24 * 60 * 60),
  }).reduce((count) => {
    if (startDate.getDay() % 6 !== 0) count++;
    startDate = new Date(startDate.setDate(startDate.getDate() + 1));
    return count;
  }, 0);
};

console.log(countWeekDays(new Date("Oct 5, 2020"), new Date("Oct 14, 2020")));
