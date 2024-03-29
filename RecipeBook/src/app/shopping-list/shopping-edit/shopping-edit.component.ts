import { ShoppingListService } from './../shopping-list.service';
import { Ingredient } from './../../shared/ingredient.model';
import { Component, ElementRef,OnInit,ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput') nameInputRef: ElementRef;
  @ViewChild('amountInput') amountInputRef: ElementRef;


  constructor(private slService: ShoppingListService) { }

  ngOnInit(): void {

  }

  onAddItem(form: NgForm){
    const value = form.value; 
    const newIngredient= new Ingredient(value.name,value.amount);
    this.slService.addIngredient(newIngredient);
  }

}
