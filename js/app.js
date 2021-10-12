
const alertBanner = document.getElementById("alert");
//create HTML for the Banner

alertBanner.innerHTML =

    `
<div class="alert-banner">
<p><strong>Alert:</strong> You have <strong>6</strong> overdue tasks
to complete</p>
<p class="alert-banner-close">x</p>
</div>

`

alertBanner.addEventListener('click', e => {
    const element = e.target;
    if (element.classList.contains("alert-banner-close")) {
        alertBanner.style.display = "none"
    }

});


// <-- Display Notifications when user clicks bell -->


const bellAlert = document.getElementById("bell-icon");
const dropdown = document.getElementById("myDropdown");

bellAlert.addEventListener('click', () => {
    dropdown.style.display = "flex";
    console.log('clicked');
});


// Close each notitication using the x button
const notifs = Array.from(document.querySelectorAll('.notif'));

notifs.forEach(notif => {
    const notifClose = notif.querySelector('.notif-close');
    notifClose.addEventListener('click', (e) => {
        notif.style.display = "none";

    });
});


// const notif = document.querySelector(".notif");
// const notifClose = document.querySelector(".notif-close");

// notifClose.addEventListener('click', (e) =>{
// notif.style.display = "none";
// // console.log(element);
// })


// <--Autocomplete search input field that lets the user search for members.-->

const search = document.querySelector(".header-search");



// <-- Create Traffic Line Graph Widget -->
const trafficCanvas = document.getElementById("traffic-chart");


//configuring xy axis labels
let trafficData1 = {
    labels: ["16-22", "23-29", "30-5", "6-12", "13-19", "20-26", "27-3",
        "4-10", "11-17", "18-24", "25-31"],
    datasets: [{
        data: [750, 1250, 1000, 2000, 1500, 1750, 1250, 1850, 2250, 1500,
            2500],
        backgroundColor: 'rgba(116, 119, 191, .3)',
        borderWidth: 1,
    }]
};

let trafficData2 = {
    labels: ["16-22", "23-29", "30-5", "6-12", "13-19", "20-26", "27-3",
        "4-10", "11-17", "18-24", "25-31"],
    datasets: [{
        data: [650, 1350, 1000, 2000, 2500, 1350, 1250, 1950, 1150, 1000,
            2500],
        backgroundColor: 'rgba(116, 119, 191, .3)',
        borderWidth: 1,
    }]
};

let trafficData3 = {
    labels: ["16-22", "23-29", "30-5", "6-12", "13-19", "20-26", "27-3",
        "4-10", "11-17", "18-24", "25-31"],
    datasets: [{
        data: [750, 1450, 1500, 2500, 1550, 1000, 1150, 1050, 2250, 1000,
            2500],
        backgroundColor: 'rgba(116, 119, 191, .3)',
        borderWidth: 1,
    }]
};


let trafficData4 = {
    labels: ["16-22", "23-29", "30-5", "6-12", "13-19", "20-26", "27-3",
        "4-10", "11-17", "18-24", "25-31"],
    datasets: [{
        data: [950, 1650, 1150, 3000, 2500, 1950, 1050, 1350, 2250, 2500,
            2500],
        backgroundColor: 'rgba(116, 119, 191, .3)',
        borderWidth: 1,
    }]
};

//traffic Options customisations

let trafficOptions = {
    aspectRatio: 2.5,
    animation: {
        duration: 0
    },
    scales: {
        y: {
            beginAtZero: true
        }
    },
    plugins: {
        legend: {
            display: false
        }
    }
};

// displaying the line chart itself
let trafficChart = new Chart(trafficCanvas, {
    type: 'line',
    data: trafficData1,
    options: trafficOptions
});


// updating chart on click
const toggleDiv = document.getElementsByClassName("switch-toggle switch-candy")[0];
const inputs = toggleDiv.getElementsByTagName("input");// select all inputs that are on toggleDiv

for (var i = 0; i < inputs.length; i++) {
    inputs[i].addEventListener("click", (e) => {
        let timeChosen = e.target;

        if (timeChosen.classList.contains('hourly')) {
           
            trafficChart.destroy();
            let trafficChart = new Chart(trafficCanvas, {
                type: 'line',
                data: trafficData1,
                options: trafficOptions
            });


        } else if (timeChosen.classList.contains('daily')) {

            let trafficChart = new Chart(trafficCanvas, {
                type: 'line',
                data: trafficData2,
                options: trafficOptions
            });

        } else if (timeChosen.classList.contains('weekly')) {

            let trafficChart = new Chart(trafficCanvas, {
                type: 'line',
                data: trafficData3,
                options: trafficOptions
            });

        } else if (timeChosen.classList.contains('monthly')) {
            let trafficChart = new Chart(trafficCanvas, {
                type: 'line',
                data: trafficData4,
                options: trafficOptions
            });

        };

    });
}














    // <-- Create Daily Traffic Bar Chart Widget -->

    const dailyCanvas = document.getElementById("daily-chart");

    // data for daily traffic bar chart
    const dailyData = {
        labels: ["S", "M", "T", "W", "T", "F", "S"],
        datasets: [{
            label: '# of Hits',
            data: [75, 115, 175, 125, 225, 200, 100],
            backgroundColor: '#7477BF',
            borderWidth: 1
        }]
    };

    // setting customisations for the chart
    const dailyOptions = {
        scales: {
            y: {
                beginAtZero: true
            }
        },
        plugins: {
            legend: {
                display: false
            }
        }
    };


    // creating the bar chart itself

    let dailyChart = new Chart(dailyCanvas, {
        type: 'bar',
        data: dailyData,
        options: dailyOptions
    });


    // <-- Create Mobile Users Donut Chart Widget -->


    const mobileCanvas = document.getElementById("mobile-chart");


    // data for mobile users donut chart

    const mobileData = {
        labels: ["Desktop", "Tablet", "Phones"],
        datasets: [{
            label: '# of Users',
            data: [2000, 550, 500],
            borderWidth: 0,
            backgroundColor: [
                '#7477BF',
                '#78CF82',
                '#51B6C8'
            ]
        }]
    };


    // setting customisations for the mobile users donut chart


    const mobileOptions = {
        plugins: {
            legend: {
                position: 'right',
                labels: {
                    boxWidth: 20,
                    fontStyle: 'bold'
                }
            }
        }
    };

    // creating the donut chart itself

    let mobileChart = new Chart(mobileCanvas, {
        type: 'doughnut',
        data: mobileData,
        options: mobileOptions
    });

    // <-- Messaging Section -->


    const user = document.getElementById("userField");
    const message = document.getElementById("messageField");
    const send = document.getElementById("send");


    send.addEventListener('click', () => {
        // ensure user and message fields are filled out
        if (user.value === "" && message.value === "") {
            alert("Please fill out user and message fields before sending");
        } else if (user.value === "") {
            alert("Please fill out user field before sending");
        } else if (message.value === "") {
            alert("Please fill out message field before sending");
        } else {
            alert(`Message successfully sent to: ${user.value}`);
        }

    });

