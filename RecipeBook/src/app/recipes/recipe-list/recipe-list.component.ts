import { Router, Routes, ActivatedRoute } from '@angular/router';
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
  constructor(private readonly receipeService: ReceipeService,
              private readonly router: Router,
              private readonly route: ActivatedRoute) { }

  ngOnInit(): void {
    this.recipes=this.receipeService.GetReceipe();
  }

  onNewRecipe(){
    this.router.navigate(['new'], {relativeTo: this.route})
   
  }

 
}
