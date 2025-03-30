/**
 * Author:Joe Akindele
 * Date:30 March 2025
 * File Name:recipes.js
 * Description:Cooking app
*/
  
// Define the createRecipe function

  export function createRecipe(ingredients) {
   return `Recipe created with ingredients: ${ingredients.join(', ')}`;
  }
  

// Define the setTimer function
export function setTimer(minutes) {
 return `Timer set for ${minutes} minutes`;
}

// Define the quit function
export function quit() {
 return 'Program exited';
}


// Default export
export default {
  createRecipe,
  setTimer,
  quit,
};