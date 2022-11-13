import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() receipeWasSelected= new EventEmitter<Recipe>();

  recipes: Recipe[] =[
    new Recipe('A test recipe','This is Description',`https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_1280.jpg`),
    new Recipe('A test 2 recipe','This is Description 2',`https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1`)
  ]
  constructor() { }

  ngOnInit(): void {
  }

  onReceipeSelected(receipe: Recipe){
    this.receipeWasSelected.emit(receipe);
  }

}
