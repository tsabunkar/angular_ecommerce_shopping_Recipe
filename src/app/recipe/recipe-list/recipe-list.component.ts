import { Component, OnInit } from '@angular/core';
import { Recipe } from '../models/recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipesArray: Recipe[] = []; //Array of Recipe Object

  constructor() { }

  ngOnInit() {
    this.recipesArray.push(this.recipeObj);
    this.recipesArray.push(this.recipeObj1);
  }

  recipeObj: Recipe = new Recipe('A test Recipe', 'This Simple Recipe', 'https://images.media-allrecipes.com/images/56589.png')
  recipeObj1: Recipe = new Recipe('A test Recipe', 'This Simple Recipe', 'https://images.media-allrecipes.com/images/56589.png')

}
