
const monthName = document.getElementById("month");
const weekDayName = document.getElementById("week");
const dayNumber = document.getElementById("day");
const yearNum = document.getElementById("year");

const date = new Date();
monthName.innerText = date.getMonth(); //returns numerical(not string) number of month
monthName.innerText = date.toLocaleString("en", {
    month: "long"
     })

weekDayName.innerText = date.toLocaleString("en", {
    weekday: "long"
      })

dayNumber.innerText = date.getDate();;
yearNum.innerText = date.getFullYear();