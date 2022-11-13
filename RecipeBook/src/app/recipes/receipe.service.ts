import { Recipe } from "./recipe.model";

export class ReceipeService{
   private recipes: Recipe[] =[
        new Recipe('A test recipe','This is Description',`https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_1280.jpg`),
        new Recipe('A test 2 recipe','This is Description 2',`https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1`)
      ]

      GetReceipe(){
        return this.recipes.slice();
      }
}