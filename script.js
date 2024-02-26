window.onload = function () {
  // Set today's date
  let dateElem = document.getElementById("date");
  let today = new Date();
  let options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric"
  };
  dateElem.innerHTML = today.toLocaleDateString("en-US", options);
};

let weather = {
  paris: {
    temp: 19.7,
    humidity: 80
  },
  tokyo: {
    temp: 17.3,
    humidity: 50
  },
  lisbon: {
    temp: 30.2,
    humidity: 20
  },
  "san francisco": {
    temp: 20.9,
    humidity: 100
  },
  oslo: {
    temp: -5,
    humidity: 20
  }
};
