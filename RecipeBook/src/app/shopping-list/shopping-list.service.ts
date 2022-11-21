import { Subject } from 'rxjs';
import { Ingredient } from './../shared/ingredient.model';

export class ShoppingListService{
   private ingredients: Ingredient[]= [
        new Ingredient('Apples',5),
        new Ingredient('Banana',12),
      ];
ingredientChanges = new Subject<Ingredient[]>();

      getIngredients(){
        return this.ingredients.slice();
      }

      addIngredient(ingredient: Ingredient){
        this.ingredients.push(ingredient)
        this.ingredientChanges.next(this.ingredients)
      }

      addIngredients(ingredients: Ingredient[] ){
        this.ingredients.push(...ingredients)
        this.ingredientChanges.next(this.ingredients.slice())
      }
    
}