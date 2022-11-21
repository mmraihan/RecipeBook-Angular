
import { ShoppingListService } from './../shopping-list/shopping-list.service';
import { Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { Recipe } from "./recipe.model";

@Injectable()
export class ReceipeService{
   private recipes: Recipe[] =[
        new Recipe('A test recipe','This is DescriptionThis is Description',`https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_1280.jpg`,
         [
          new Ingredient('Oil',2),
          new Ingredient('Sugar', 3)
         ]),
        new Recipe('A test 2 recipe','This is Description 2 This is Description',`https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1`,
        [
          new Ingredient('Pizza',4),
          new Ingredient('Sauce', 10)
         ])
        
      ]

      constructor(private slService: ShoppingListService){}


      GetReceipe(){
        return this.recipes.slice();
      }

      addIngredientsToShoppingList(ingredients: Ingredient[]){
        this.slService.addIngredients(ingredients)
        

      }

      GetRecipeById(index: number){
        return this.recipes[index] 
      }
}