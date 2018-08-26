import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/models/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  ingredientsArray: Ingredient[] = [];

  constructor() { }

  ngOnInit() {
    this.ingredientsArray.push(this.ingredientObj1,this.ingredientObj2)
  }

  ingredientObj1: Ingredient = new Ingredient('Apple', 5);
  ingredientObj2: Ingredient = new Ingredient('Banana', 10);

}
