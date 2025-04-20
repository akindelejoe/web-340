/**
 * Author: Joe Akindele
 * Date: April-20-2025
 * File Name: pie.js
 * Description: Pie baking logic
 */

"use strict";

function bakePie(pieType, ingredients) {
  const essentials = ["flour", "sugar", "butter"];

  for (const item of essentials) {
    if (!ingredients.includes(item)) {
      console.warn(`Missing essential ingredient: ${item}`);
      process.exit(1);
    }
  }

  return `Successfully baked an ${pieType} pie!`;
}

module.exports = { bakePie };
