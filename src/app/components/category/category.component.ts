import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/interface/category';
import { CategoryService } from 'src/app/service/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  categories: Category[] = [];

  constructor(private categoryService: CategoryService) {}

  ngOnInit(): void {
    this.categoryService
      .getCategories()
      .subscribe(
        (categories) => (this.categories = categories['response'])
      );

  };

  deleteCategory(category: Category) {
    this.categoryService
      .deleteCategory(category)
      .subscribe(
        () => (
          this.categories.filter((c) => c._id !== c._id))
      );
      return this.categories;

  };

  updateCategory(category: Category) {
    this.categoryService
      .updateCategory(category)
      .subscribe();
      console.log(category, "updating this category!");
  };

  addCategory(category: Category) {
    this.categoryService
      .addCategory(category)
      .subscribe(
        category => this.categories.push(category)
      );
    console.log(category, "adding this category!");
  };


};
