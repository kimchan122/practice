import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.scss',
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe',
      'This simply a test',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUGfWNwB4vxMvTp7B1NwIYFCVd-u6Oa8YNLg&s'
    ),
    new Recipe(
      'A Test Recipe',
      'This simply a test',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUGfWNwB4vxMvTp7B1NwIYFCVd-u6Oa8YNLg&s'
    ),
  ];

  constructor() {}

  ngOnInit() {}
}
