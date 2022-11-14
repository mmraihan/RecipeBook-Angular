import { ReceipeService } from './../../receipe.service';
import { Recipe } from './../../recipe.model';
import { Component,Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
 @Input() recipe: Recipe;

 

  constructor(private recipeService : ReceipeService) { }

  ngOnInit(): void {
  }

  onSeleceted(){
   this.recipeService.receipeSelected.emit(this.recipe);

  }

}
