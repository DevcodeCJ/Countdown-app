const displayTime = () => {
   const counters = document.querySelectorAll('.count');

   const futureDate = new Date(2020, 10, 4, 12, 0);
   const today = new Date();

   const futureTime = futureDate.getTime();
   const currentTime = today.getTime();

   const t =  futureTime - currentTime;

   const oneDay = 1000 * 60 * 60 * 24;
   const oneHour = 1000 * 60 * 60;
   const oneMinute = 1000 * 60;
   const oneSecond = 1000;

   let days = t / oneDay;
   days = Math.floor(t / oneDay);
   let hours = Math.floor((t % oneDay) / oneHour);
   let minutes = Math.floor((t % oneHour) / oneMinute);
   let seconds = Math.floor((t % oneMinute) / oneSecond);

   const values = [days, hours, minutes, seconds];

   const prefix = num => {
      if(num < 10) {
         return `0${num}`;
      }
      return num;
   }

   counters.forEach((counter, index) => {
      counter.textContent = prefix(values[index]);
   })

   if(t <= 0) {
      clearInterval(countdown);
      counters.forEach((counter) => {
         counter.textContent = '00';
      })
   }
}

const countdown = setInterval(displayTime, 1000);