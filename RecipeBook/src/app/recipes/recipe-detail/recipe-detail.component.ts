import { ReceipeService } from './../receipe.service';
import { Recipe } from './../recipe.model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
@Input() receipe: Recipe;

  constructor(private recipeSertvice: ReceipeService) { }

  ngOnInit(): void {
  }

  onAddToShoppingList(){
    this.recipeSertvice.addIngredientsToShoppingList(this.receipe.ingredients)

  }

}
