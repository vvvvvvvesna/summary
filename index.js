function div(val, by) {
  return (val - (val % by)) / by;
}

function getCount(work) {
  if (!work.isOngoing) {
    var distance = work.final - work.start;
  } else {
    var now = new Date().getTime();
    var distance = now - work.start;
  }
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  document.getElementById(
    work.name
  ).innerHTML = `${days} d ${hours} h ${minutes} m ${seconds} s (${days >= 365 ? div(days, 365) : 0
  } y ${div(days % 365, 30)} m)`;
}

const worksArray = [{
  isOngoing: true,
  start: new Date("Dec 23, 2022 10:00:00").getTime(),
  name: "freelance"
},
{
  isOngoing: false,
  start: new Date("Jan 23, 2019 10:00:00").getTime(),
  final: new Date("Dec 23, 2022 10:00:00").getTime(),
  name: "wm-reply"
},
{
  isOngoing: false,
  start: new Date("Dec 20, 2018 10:00:00").getTime(),
  final: new Date("Jul 23, 2019 10:00:00").getTime(),
  name: "taex"
}]

worksArray.forEach(work => {
  if (work.isOngoing) {
    getCount(work);
    setInterval(function () {
      getCount(work);
    }, 1000);
  } else
    getCount(work);
});

