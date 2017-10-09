import { Recipe } from './../recipe.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Cookies', 'Eggless jaggery shortbread recipe',
    'https://upload.wikimedia.org/wikipedia/commons/1/14/Eggless-jaggery-shortbread-recipe.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

}
