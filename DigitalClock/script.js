const clock = document.getElementById('clock');
// const clock = document.querySelector('#clock')

// IMPORTANT
// method is used to repeatedly execute a function at a fixed time interval
setInterval(function () {
  let date = new Date();
  // console.log(date.toLocaleTimeString());
  clock.innerHTML = date.toLocaleTimeString();
}, 1000);