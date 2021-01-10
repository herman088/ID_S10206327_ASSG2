


// set value for class form
const searchForm = document.querySelector("form");

 let searchQuery = '';
 
 let eachfood = document.querySelector(".eachfood")

 let calorie =  document.querySelector(".Calorie")

 //function upon submitting user query
  searchForm.addEventListener("submit", function(e){
  

 //prevent default action of submitting 
  e.preventDefault();
  searchQuery = e.target.querySelector("input").value;


//if else based on user query to set url
  if(calorie.value != null)
  {
   url = `https://api.edamam.com/search?q=${searchQuery}&app_id=93616471&app_key=00a798782e17b7f6a59dd7ed1b5656e9&from=0&to=20&calories=${calorie.value}`
  }
  

  if (calorie.value = ' '){

  url =  `https://api.edamam.com/search?q=${searchQuery}&app_id=93616471&app_key=00a798782e17b7f6a59dd7ed1b5656e9&from=0&to=100`


  }

  //using ajax to get data 
    $.ajax(url)
   
   
        .done(function(response) {
            
            displayrecipes(response.hits);
        }).fail(function() {
            console.log("error");
        });



        $('.ALLcontainer').css({
          'background-color':'darkkhaki',
          'background-size':'contain',
          'height':'100%'
      }); 
     
  
});

// function to display results upon search
function displayrecipes(results) {
  
  let addresults = "";
  results.map((result) => {
    addresults += `
      <div class = "eachfood">
           
              <div class = "food1">
                <div>
                  <img src = ${result.recipe.image} alt = ${result.recipe.label}>

                  <div class = "namefood">
                    <h2 class "title"> ${result.recipe.label} </h2>
                    <a href = ${result.recipe.url}> View Recipe </a>
                  </div>

                </div>
              </div>
              <div class  = "item-data"> Calories :  ${result.recipe.calories.toFixed(2)}  </div>
              <div class  = "item-data"> Protein :  ${result.recipe.totalNutrients.PROCNT.quantity.toFixed(2)} ${result.recipe.totalNutrients.PROCNT.unit}</div>
              <div class  = "item-data"> Carbs : ${result.recipe.totalNutrients.CHOCDF.quantity.toFixed(2)} ${result.recipe.totalNutrients.CHOCDF.unit} </div>
              <div class  = "item-data">Diet Labels: ${result.recipe.dietLabels} </div>

          



    </div>
    `;
  });
 eachfood.innerHTML = addresults;
}


