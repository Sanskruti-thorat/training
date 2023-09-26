const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  const weekdays = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];

  const giveaway = document.querySelector('.giveaway');
  const deadline = document.querySelector('.deadline');
  const items = document.querySelectorAll('.deadline-format h4');
//   console.log(items);

let futuredate = new Date(2023,8,24,11,30,0);
// console.log(futuredate);

const year = futuredate.getFullYear();
const hours = futuredate.getHours();
const min = futuredate.getMinutes();
const month = futuredate.getMonth();
const day = futuredate.getDate();
const weekday = futuredate.getDay();// or weekdays[futuredate.getDate()];


// console.log(months[month]); // looks in array to find corresponding month with help of index
giveaway.textContent = `giveaway ends on ${weekdays[weekday]}, ${day} ${months[month]} ${year} ${hours}:${min} am`;
// future time in ms
const futuretime = futuredate.getTime();

function getremainingtime(){

    const today = new Date().getTime();
    const t  = futuretime - today;

    // 1s = 1000ms 
    // 1 m = 60s]
    // 1 hr = 60m
    //1 day = 24hrs
    // values in ms 
    const oneDay = 24 * 60 * 60 * 1000;
    const oneHour = 60 * 60 * 1000;
    const oneMinute = 60 * 1000;
    // calculate all values
    let days = t / oneDay;
    days = Math.floor(days);
    let hours = Math.floor((t % oneDay) / oneHour);
    let minutes = Math.floor((t % oneHour) / oneMinute);
    let seconds = Math.floor((t % oneMinute) / 1000);
  

 // set values array
 const values = [days, hours, minutes, seconds];
 function format(item) {
   if (item < 10) {
     return (item = `0${item}`);
   }
   return item;
 }

 items.forEach(function (item, index) {
   item.innerHTML = format(values[index]);
 });

 if (t < 0) {
   clearInterval(countdown);
   deadline.innerHTML = `<h4 class="expired">sorry, this giveaway has expired!</h4>`;
 }
}
// countdown;
let countdown = setInterval(getremainingtime, 1000);
