import { useEffect, useState } from "react";
import React from 'react'
function Recipe() {

    const [recipes, setRecipes] = useState([
      
      ]);
    
      const [searchQuery, setSearchQuery] = useState('Cake');
    
      useEffect(() => {
        // Replace YOUR_APP_ID and YOUR_APP_KEY with your actual API credentials
        const app_id = '8e84f7c2';
        const app_key = '52f5d72855baffe289980365a08f6d7d';
        // Change search query to 'salad'
        const from = 0; // Add 'from' parameter
    
        // Add additional parameters to the API request URL
        const url = `https://api.edamam.com/search?q=${searchQuery}&app_id=${app_id}&app_key=${app_key}&from=${from}&to=10&health=alcohol-free&calories=100-500&time=1%2B`;
    
        // Make the request to the Edamam Recipe Search API
        fetch(url)
          .then(response => response.json())
          .then(data => {
            setRecipes(data.hits);
          })
          .catch(error =>  setRecipes(error.hits));
      }, [searchQuery]);
    
      const handleSearch = () => {
        const searchInput = document.getElementById('search-input');
        setSearchQuery(searchInput.value);
        searchInput.value = '';
      };
  return (
    <div className="Recipe">
      <div className="Recipe-con"> 
      <h3>Enter a what you have eaten, like "coffee and croissant" or "chicken enchilada" 
        to see how it works. We have accurate data tens of thousands of foods, including international dishes.</h3>

     <div className="input-div">
     <input id='search-input' type='text' placeholder='Search for recipes' />
      <button onClick={handleSearch}>Search</button>
     </div>
      
      <ul>
        {recipes.map(recipe => (
          <li>
            
            <div className="recipe-img">
            <h2>{recipe.recipe.label}</h2>
            <img src={recipe.recipe.image} alt={recipe.recipe.label} />
            </div>

            <div className="pspan">
            <p><span>Servings:</span> {recipe.recipe.yield}</p>
            <p><span>Calories:</span> {recipe.recipe.calories.toFixed(2)}</p>
            <p><span>Total time:</span> {recipe.recipe.totalTime}minutes</p>
            <p><span>Cuisine types:</span> {recipe.recipe.cuisineType && recipe.recipe.cuisineType.map(cuisine => cuisine.charAt(0).toUpperCase() + cuisine.slice(1)).join(', ')}</p>
            </div>
            <p><span>Health labels:</span> {recipe.recipe.healthLabels && recipe.recipe.healthLabels.join(', ')}</p>
            <ul>
              {recipe.recipe.ingredientLines.map(ingredient => (
                <li key={ingredient}>{ingredient}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
      </div>
    </div>
  )
}

export default Recipe
