const date = new Date();

// All logic is in renderCalendar function. We call her at last line of the program.
const renderCalendar = () => {
  const monthDays = document.querySelector(".days");

  // lastDay check the last day of current month (30 or 31), getDate() return this day number
  const lastDay = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    0
  ).getDate();

  const prevLastDay = new Date(
    date.getFullYear(),
    date.getMonth(),
    0
  ).getDate();

  // const firstDayIndex = date.getDay();

  // const lastDayIndex = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDay();

  // const nextDays = (7 - lastDayIndex) - 1;

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  let titleDate = document.querySelector(".date h1");

  titleDate.innerHTML = months[date.getMonth()];

  titleDate.innerHTML = months[date.getMonth()];

  let paragraphDate = document.querySelector(".date p");

  paragraphDate.innerHTML = new Date().toDateString();

  let days = "";

  //for loop with decrement, insert last days of the previous month in document '.days' <div>
  for (let x = 5; x > 0; x--) {
    days += `<div class="prev-date">${prevLastDay - x + 1}</div>`;
  }

  //this for loop insert 31 numbered div in the document '.days' <div>
  for (let i = 1; i <= lastDay; i++) {
    // If variable 'i' is equal to actual day and if the month of object 'date' is equal to actual month >>
    if (
      i === new Date().getDate() &&
      date.getMonth() === new Date().getMonth()
    ) {
      // >> create <div> with '.today' class.
      days += `<div class="today">${i}</div>`;
    } else {
      days += `<div>${i}</div>`;
    }
  }

  for (let j = 1; j <= 6; j++) {
    days += `<div class="next-date">${j}</div>`;
  }

  monthDays.innerHTML = days;
};

document.querySelector(".previous").addEventListener("click", () => {
  // Set the  month in our 'date' object to current month - 1 ( previous month)
  date.setMonth(date.getMonth() - 1);
  // Refresh the logic with updated month
  renderCalendar();
});

document.querySelector(".next").addEventListener("click", () => {
  date.setMonth(date.getMonth() + 1);
  renderCalendar();
});

renderCalendar();
