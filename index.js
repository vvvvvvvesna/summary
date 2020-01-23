function getDifference() {
    var date1 = new Date('7/11/2010');
    var date2 = new Date('12/12/2010');
    return date2.getDate() - date1.getDate();
}

function div(val, by) {
    return (val - val % by) / by;
}

function getCount(start, id, final) {
    if (final) {
        var distance = final - start;
    } else {
        var now = new Date().getTime();
        var distance = now - start;
    }
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    document.getElementById(id).innerHTML =`${days} d ${hours} h ${minutes} m ${seconds} s (${days >= 365 ? div(days, 365) : 0} y ${div(days % 365, 30)} m)`;
}

function fillSkills() {
    var ctx = document.getElementById('my-skills').getContext('2d');
    var color = Chart.helpers.color;
    var myChart = new Chart(ctx, {
        type: 'radar',
        data: {
            labels: ['Patient', 'Friendly', 'Eating', 'Happiness', 'Motivation', 'Hard Work', 'Curiosity', 'Sport', 'Politness'],
            datasets: [{
                label: "Me",
                data: [8, 5, 10, 6, 8, 9, 7, 8, 4],
                backgroundColor: color("rgb(83, 66, 108)").alpha(0.6).rgbString(),
            }]
        },
        options: {
            scale: { ticks: { beginAtZero: true, max: 10 } },
            elements: {
                point: {
                    radius: 0
                }
            }
        }
    });

    myChart.options.legend.display = false;
}

const startWMReply = new Date("Jan 23, 2019 10:00:00").getTime();
const startTaex = new Date("Dec 20, 2018 10:00:00").getTime();
const finalTaex = new Date("Jul 23, 2019 10:00:00").getTime();
getCount(startTaex, "taex", finalTaex);
setInterval(function () {
    getCount(startWMReply, "wm-reply");
}, 1000)

fillSkills()
