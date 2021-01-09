const searchForm = document.querySelector("form");
 let searchQuery = '';
 
 let eachfood = document.querySelector(".eachfood")



  searchForm.addEventListener("submit", function(e){
  
  e.preventDefault();
  searchQuery = e.target.querySelector("input").value;
  console.log(searchQuery);
    $.ajax(`https://api.edamam.com/search?q=${searchQuery}&app_id=93616471&app_key=00a798782e17b7f6a59dd7ed1b5656e9&from=0&to=20`
   
   )
        .done(function(response) {
           console.log(response);
            displayrecipes(response.hits);
        }).fail(function() {
            console.log("error");
        });
  
});

   



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
              <p class  = "item-data"> Calories :  ${result.recipe.calories.toFixed(2)}  </p>
              <p class  = "item-data"> Protein :  ${result.recipe.totalNutrients.PROCNT.quantity.toFixed(2)} ${result.recipe.totalNutrients.PROCNT.unit}</p>
              <p class  = "item-data"> Carbs : ${result.recipe.totalNutrients.CHOCDF.quantity.toFixed(2)} ${result.recipe.totalNutrients.CHOCDF.unit} </p>
            </div>
          </div>
    `;
  });
 eachfood.innerHTML = addresults;
}





