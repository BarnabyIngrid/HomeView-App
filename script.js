//Page is ready to run after html is loaded
$(document).ready(function () {
    
    //Display last search history using for loop, if else statements and localStorage
    var searchedPostCode = []
    
    //On click function for stored postcodes
    $("").on("click",".selected",getSearchInput);
    $(document).on("click", "selected",storedPostCodes)
    
    //Call searchHistory function when the dashboard page loads
    searchHistory();
    
    function name(params) {
        
    }
    //
    
    //Listen to the search button click and create function to get user input/city
    function getSearchInput(event) {
        event.preventDefault
        
    }
    
    //Declare variable for CrimeData
    
    //Create a function to display crime data search History stored in local storage
   
    
    //**************Need to revalidate the data Names to add below from HTML*******************////////////////
    // Retrieve crime data using an API
    fetch('addurl')
     .then (response =>response.json());
     
       //Parse data into a Javascript object
       const crimeData = JSON.parse(String);
    
       //Format the data as HTML
       let crimeDataHtml = '<ul>';
       crimeData.forEach(crime => {
         crimeDataHtml += "<li>${crime.type}: ${crime.date},</li>";
       });
       crimeDataHtml += '<ul>';
    
      // Insert the HTML into your web page
      documet.getElementById ('crime-data-container').innerHTML = crimeDataHtml;
    })
    
   
    const crimeDataJsom = '{"type":"Theft","date":"2022-02-10","location": "London"}';
    const crimeData = JSON.parse (crimeDataJson);
    console.log(crimeData.type); //Output: "Theft"
    console.log(crimeData.data); //Output: "2022-02-10"
    console.log(crimeData.location); //Output: "London"
    