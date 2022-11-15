import { EventEmitter } from '@angular/core';
import { Ingredient } from './../shared/ingredient.model';
export class ShoppingListService{
   private ingredients: Ingredient[]= [
        new Ingredient('Apples',5),
        new Ingredient('Banana',12),
      ];
ingredientChanges = new EventEmitter<Ingredient[]>();

      getIngredients(){
        return this.ingredients.slice();
      }

      addIngredient(ingredient: Ingredient){
        this.ingredients.push(ingredient)
        this.ingredientChanges.emit(this.ingredients)
      }

      addIngredients(ingredients: Ingredient[] ){
        this.ingredients.push(...ingredients)
        this.ingredientChanges.emit(this.ingredients.slice())
      }
    
}