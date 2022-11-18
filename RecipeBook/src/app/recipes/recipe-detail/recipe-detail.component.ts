import { ActivatedRoute, Router } from '@angular/router';
import { ReceipeService } from './../receipe.service';
import { Recipe } from './../recipe.model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
 receipe: Recipe;
  id: number;

  constructor(private recipeSertvice: ReceipeService,
               private route: ActivatedRoute,
               protected router: Router) { }

  ngOnInit() {
    //this.id=this.route.snapshot.params['id'];
    this.route.params.subscribe((c:any)=>{
      this.id= +c['id'];
      this.receipe= this.recipeSertvice.GetRecipeById(this.id)
     
    })   
  }

  onAddToShoppingList(){
    this.recipeSertvice.addIngredientsToShoppingList(this.receipe.ingredients)
  }

  onEditRecipe(){
    this.router.navigate(['edit'], {relativeTo: this.route})


  }


}
