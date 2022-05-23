/*
**** 11.2.4 ****
*/

//import the data from data.js
const tableData = data;


// Reference the HTML table using D3
/*D3 (JS library that produces sophisticated 
    and highly dynamic graphics in an HTML)*/
var tbody = d3.select("tbody") // we declared tbody then told JS to look for <tbody> tags in HTML


/*
11.5.1 Introduction to Dynamic Tables
11.5.2 Add forEach to Your Table
*/

/*function buildTable(data){
    tbody.html(""); //clearing the table using empty string

    data.forEach((dataRow) => {
        let row = tbody.append("tr"); // add table row in tbody

    });
}*/

function buildTable(data) {
    // First, clear out any existing data
    tbody.html("");
  
    // Next, loop through each object in the data
    // and append a row and cells for each value in the row
    data.forEach((dataRow) => {
      // Append a row to the table body
      let row = tbody.append("tr");
  
      // Loop through each field in the dataRow and add
      // each value as a table cell (td)
      Object.values(dataRow).forEach((val) => {
        let cell = row.append("td");
        cell.text(val);
        }
      );
    });
  }

  //11.5.3
/*function handleClick() {
    let date = d3.select("#datetime").property("value");
    let filteredData = tableData;

    if (date) {
        filteredData = filteredData.filter(row => row.datetime === date);
    };

}*/

//11.5.4
function handleClick() {
    // Grab the datetime value from the filter
    let date = d3.select("#datetime").property("value");
    let filteredData = tableData;
  
     // Check to see if a date was entered and filter the
    // data using that date.
    if (date) {
      // Apply `filter` to the table data to only keep the
      // rows where the `datetime` value matches the filter value
      filteredData = filteredData.filter(row => row.datetime === date);
    };
  
     // Rebuild the table using the filtered data
    // @NOTE: If no date was entered, then filteredData will
    // just be the original tableData.
    buildTable(filteredData);
  };


// Attach an event to listen for the form button
d3.selectAll("#filter-btn").on("click", handleClick);

// Build the table when the page loads
buildTable(tableData);
