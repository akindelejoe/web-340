/**
 * Author:Joe Akindele
 * Date:30 March 2025
 * File Name:index.js
 * Description:Cooking app
 *
**/


// TODO: Import your module using require

const { createRecipe, setTimer, quit } = require('./recipes');

createRecipe(['eggs', 'milk', 'flour']);
setTimer(30);
quit();
