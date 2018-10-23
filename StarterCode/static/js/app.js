//assgign data
var ufo = data;

// Get a reference to the table body
var tbody = d3.select("tbody");

// Console.log the sighting data from data.js
console.log(ufo);

// Arrow function
data.forEach(sighting => {
  var row = tbody.append("tr");
  Object.entries(sighting).forEach(([key, value]) => {
    var cell = tbody.append("td");
    cell.text(value);
  });
});

// Select the submit button
var submit = d3.select("#submit");

submit.on("click", function() {

  // Prevent the page from refreshing
  d3.event.preventDefault();

  // Select the input element and get the raw HTML node
  var inputField = d3.select("#datetime");

  // Get the value property of the input element
  var inputValue = inputField.property("value");

  var filteredData = ufo.filter(function(fSight){
    return fSight.state === inputValue
  })
  console.log(filteredData);

  // //convert date
  // var inputValue = inputValue.getTime()

  // var filteredData = ufo.filter(function(fSight){
  //   var sDate = new Date(fSight.datetime)
  //   var sDate = sDate.getTime()
  //   if (sDate >= inputValue) {
  //     return ufo;
  //   } 
  // })
//   console.log(filteredData);
});

// var parseDate = d3.timeParse("%m/%d/%y")