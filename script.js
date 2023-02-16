//Page is ready to run after html is loaded
$(document).ready(function (){
    
  
  //Get the form element and add an event listener to the submit button
  var form = document.getElementById("HVIO-container-form");
    form.addEventListener("submit", function(Event)
    
    // Prevent the form from submitting and refreshing page
    {Event.preventDefault();
  }
  
  //On click function for stored postcodes
  $("button").on("click",".selected",getSearchInput));
  $(document).on("click","selected",storedPostCodes);

    // Define the postcode construct for UK Postcode format
    var postcodeRegex= "[A-Z]{1,2},d{1,2}[A-Z]{0,1},s*,d[A-Z]{2},i";
  
    function isValuePostcode(postcode){
      //Provides Postcode response
     return postcodeRegex.test(postcode);
    }
    console.log(isValuePostcode('SW1A 2AA')); // true
    console.log(isValuePostcode('AB1 1ZZ')); // true
    console.log(isValuePostcode('12B XYZ')); // false
  
  // Get the postcode value from the input field

     let postcodeRegex = "document.getElementById('postcode')";

    
          //**************Need to revalidate the data Names to add below from HTML*******************////////////////

      
    //Rapid API BroadBand Data call
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '9389e63e86msh0cbe89d62dec2a9p1038dejsn6de54beb1d1b',
        'X-RapidAPI-Host': 'zoopla.p.rapidapi.com'
      }
    };
    
    fetch('https://zoopla.p.rapidapi.com/properties/get-broadband?listing_id=56354192', options)
      .then(response => response.json())
      .then(response => console.log(response))
       // Process the data and log in console
       console.log(data);})

      .catch(err => console.error(error));

    //This will create a card for the API requet result
   function createCard(data){
    return 
     <div class="card">
       <img src="${data.image}" class="card-img-top" alt="${data.title}"></img>
       <div class="card-body"></div>
        <h5 class="card-title">${data.title}</h5>
        <p class="card-text">${data.description}</p>
     </div>
   }
   

       //Format the data as HTML
       let propertDataHtml = '<ul>';
       propertData.forEach(crime => {
         propertDataHtml += "<li>${listing.type}: ${listing.date},</li>";
       });
       propertDataHtml += '<ul>';
    
      // Insert the HTML into your web page
      documet.getElementById ('property-data-container').innerHTML = propertDataHtml;{
      }
    
    
    // New Section to create container for each object to create infinite scroll response




   //Implementing infinite scrolling for API Data

   let divContent= document.getElementById('divContent');
   let listEnd = document.getElementById('listEnd');
   let itemCount = 0;
   let appending =false;

    window.addEventListener('DOMContentLoaded',load);
    function load(){
            addItem;

    }

    function addItem(){
      appending = true;
      for (let i = 0; i < 20; i++) {
           let item = generateDataBlock(['this is the item #',itemCount].join(''));
           divContent.appendChild(item);
           itemCount++;
      }
      appending = false;
        
        
      }

// Function for data Block to contian the API result for x
    function generateDataBlock(message){
      let item = document.createElement('div');
      item.setAttribute ('class', 'item');
      item.textContent = message;
      return item;
    }
     let options ={
       root:null,
       rootMargin:'0px',
       threshold:1.0
  
     };
     
     // Add Intersection observer to infinite scroll container
     let callback= (entries, observer) =>{
         entries.forEach(entry => {
          if(entry.target.id === 'listEnd'){
            if(entry.IntersectionObserver && !appending){
               appending = true;
               setTimeout(() =>{
                addItem();
               },3000);
               
              }
            }
          });
         };
      
     
     let observer = new IntersectionObserver(callback,options);
     observer.observe(listEnd)
    
// Fade in and out of reviews.
var dataElements = document.querySelectorAll("#data p");

    function fadeIn() {
      for (var i = 0; i < dataElements.length; i++) {
        dataElements[i].classList.remove("fade-out");
        dataElements[i].classList.add("fade-in");
      }
    }
    
    function fadeOut() {
      for (var i = 0; i < dataElements.length; i++) {
        dataElements[i].classList.remove("fade-in");
        dataElements[i].classList.add("fade-out");
      }
    }
    function populateData() {
      var data = ["This has really helped me find an area that I can call home.-Sally A.", 
      "Looking at the crime stats for each area is an eyeopener!-Ben T.",
      "Broadband speeds are important to me as I work from home.-Carol G.",
      "Being in close proximaty to the local schools in the area is key for my family.-Adam M."];
      var html = "";
      for (var i = 0; i < data.length; i++) {
        html += "<p>" + data[i] + "</p>";
      }
      document.getElementById("data").innerHTML = html;
    }
       // Fade in the elements after a delay
    setTimeout(fadeIn, 1000);
    
    // Fade out the elements after another delay
    setTimeout(fadeOut, 5000);
    

    const propertDataJson = '{"type":"Theft","date":"2022-02-10","location": "London"}';
    const propertData = JSON.parse (propertDataJson);
    console.log(propertData.type); //Output: "Theft"
    console.log(propertData.data); //Output: "2022-02-10"
    console.log(propertData.location); //Output: "London"

  
    