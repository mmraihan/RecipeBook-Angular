import { Ingredient } from './../shared/ingredient.model';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ShoppingListService } from './shopping-list.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {
    ingredients: Ingredient[];
    private igChangeSub:Subscription;

  constructor(private slService:  ShoppingListService) { }

  ngOnInit(): void {

   this.ingredients= this.slService.getIngredients();
    this.igChangeSub = this.slService.ingredientChanges.subscribe((ingredentss: Ingredient[])=>{
    this.ingredients=ingredentss;
   })

  }
  addOngredient(ingredient: Ingredient){
    this.ingredients.push(ingredient);
   
  }

  ngOnDestroy(): void {
    this.igChangeSub.unsubscribe();
    
  }

}
