
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
    labels: ["10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm",
        "5pm", "6pm", "7pm", "8pm"],
    datasets: [{
        data: [750, 1250, 1000, 2000, 1500, 1750, 1250, 1850, 2250, 1500,
            2500],
        backgroundColor: 'rgba(116, 119, 191, .3)',
        borderWidth: 1,
    }]
};

let trafficData2 = {
    labels: ["Mon", "Tues", "Weds", "Thurs", "Fri", "Sat", "Sun",
        "Mon", "Tues", "Weds", "Thurs"],
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
    labels: ["Jan", "Feb", "March", "April", "May", "June", "July",
        "Aug", "Sep", "Oct", "Nov"],
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
const trafficChart = new Chart(trafficCanvas, {
    type: 'line',
    data: trafficData1,
    options: trafficOptions
});

//function to update chart
const updateChart = (chart, newData) => {
    chart.data = newData;
    chart.update();
};

// updating chart on click
const toggleDiv = document.getElementsByClassName("switch-toggle switch-candy")[0];
const inputs = toggleDiv.getElementsByTagName("input");// select all inputs that are on toggleDiv

for (var i = 0; i < inputs.length; i++) {
    inputs[i].addEventListener("click", (e) => {
        let timeChosen = e.target;

        if (timeChosen.classList.contains('hourly')) {
            updateChart(trafficChart, trafficData1);
        } else if (timeChosen.classList.contains('daily')) {
            updateChart(trafficChart, trafficData2);
        } else if (timeChosen.classList.contains('weekly')) {
            updateChart(trafficChart, trafficData3);
        } else if (timeChosen.classList.contains('monthly')) {
            updateChart(trafficChart, trafficData4);
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

// <--Autocomplete feature for the "Search for User" box, listing names that match the search term -->


    var userNames = ["Victoria Chambers", "Dale Byrd", "Dawn Wood", "Dan Oliver"];

    function autocomplete(inp, arr) {
        /*the autocomplete function takes two arguments,
        the text field element and an array of possible autocompleted values:*/
        var currentFocus;
        /*execute a function when someone writes in the text field:*/
        inp.addEventListener("input", function(e) {
            var a, b, i, val = this.value;
            /*close any already open lists of autocompleted values*/
            closeAllLists();
            if (!val) { return false;}
            currentFocus = -1;
            /*create a DIV element that will contain the items (values):*/
            a = document.createElement("DIV");
            a.setAttribute("id", this.id + "autocomplete-list");
            a.setAttribute("class", "autocomplete-items");
            /*append the DIV element as a child of the autocomplete container:*/
            this.parentNode.appendChild(a);
            /*for each item in the array...*/
            for (i = 0; i < arr.length; i++) {
              /*check if the item starts with the same letters as the text field value:*/
              if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
                /*create a DIV element for each matching element:*/
                b = document.createElement("DIV");
                /*make the matching letters bold:*/
                b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
                b.innerHTML += arr[i].substr(val.length);
                /*insert a input field that will hold the current array item's value:*/
                b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
                /*execute a function when someone clicks on the item value (DIV element):*/
                    b.addEventListener("click", function(e) {
                    /*insert the value for the autocomplete text field:*/
                    inp.value = this.getElementsByTagName("input")[0].value;
                    /*close the list of autocompleted values,
                    (or any other open lists of autocompleted values:*/
                    closeAllLists();
                });
                a.appendChild(b);
              }
            }
        });
        /*execute a function presses a key on the keyboard:*/
        inp.addEventListener("keydown", function(e) {
            var x = document.getElementById(this.id + "autocomplete-list");
            if (x) x = x.getElementsByTagName("div");
            if (e.keyCode == 40) {
              /*If the arrow DOWN key is pressed,
              increase the currentFocus variable:*/
              currentFocus++;
              /*and and make the current item more visible:*/
              addActive(x);
            } else if (e.keyCode == 38) { //up
              /*If the arrow UP key is pressed,
              decrease the currentFocus variable:*/
              currentFocus--;
              /*and and make the current item more visible:*/
              addActive(x);
            } else if (e.keyCode == 13) {
              /*If the ENTER key is pressed, prevent the form from being submitted,*/
              e.preventDefault();
              if (currentFocus > -1) {
                /*and simulate a click on the "active" item:*/
                if (x) x[currentFocus].click();
              }
            }
        });
        function addActive(x) {
          /*a function to classify an item as "active":*/
          if (!x) return false;
          /*start by removing the "active" class on all items:*/
          removeActive(x);
          if (currentFocus >= x.length) currentFocus = 0;
          if (currentFocus < 0) currentFocus = (x.length - 1);
          /*add class "autocomplete-active":*/
          x[currentFocus].classList.add("autocomplete-active");
        }
        function removeActive(x) {
          /*a function to remove the "active" class from all autocomplete items:*/
          for (var i = 0; i < x.length; i++) {
            x[i].classList.remove("autocomplete-active");
          }
        }
        function closeAllLists(elmnt) {
          /*close all autocomplete lists in the document,
          except the one passed as an argument:*/
          var x = document.getElementsByClassName("autocomplete-items");
          for (var i = 0; i < x.length; i++) {
            if (elmnt != x[i] && elmnt != inp) {
            x[i].parentNode.removeChild(x[i]);
          }
        }
      }
      /*execute a function when someone clicks in the document:*/
      document.addEventListener("click", function (e) {
          closeAllLists(e.target);
      });
      }

      autocomplete(document.getElementById("search"), userNames);




      // <--Settings Local Storage-->

    