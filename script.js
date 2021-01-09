const searchForm = document.querySelector("form");
 let searchQuery = '';
 
 let eachfood = document.querySelector(".eachfood")



  searchForm.addEventListener("submit", function(e){
  
  e.preventDefault();
  searchQuery = e.target.querySelector("input").value;
  console.log(searchQuery);
    $.ajax(`https://api.edamam.com/search?q=${searchQuery}&app_id=93616471&app_key=00a798782e17b7f6a59dd7ed1b5656e9`
   
   )
        .done(function(response) {
           console.log(response.hits);
            displayrecipes(response.hits);
        }).fail(function() {
            console.log("error");
        });
  
});