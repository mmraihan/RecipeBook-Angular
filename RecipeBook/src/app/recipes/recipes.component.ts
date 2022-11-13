import { ReceipeService } from './receipe.service';
import { Recipe } from './recipe.model';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers:[ReceipeService]
})
export class RecipesComponent implements OnInit {
  constructor() { }
  selectedReceipe: Recipe;

  ngOnInit(): void {

  }

}
