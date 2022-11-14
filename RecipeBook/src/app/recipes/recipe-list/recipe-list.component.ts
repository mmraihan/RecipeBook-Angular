import { Component, OnInit } from '@angular/core';
import { ReceipeService } from '../receipe.service';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {


  recipes: Recipe[];
  constructor(private readonly receipeService: ReceipeService) { }

  ngOnInit(): void {
    this.recipes=this.receipeService.GetReceipe();
  }

 
}
