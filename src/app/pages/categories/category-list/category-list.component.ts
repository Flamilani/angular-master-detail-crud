import { Category } from './../models/category.model';
import { Component, OnInit, Output } from '@angular/core';
import { CategoryService } from '../services/category.service';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {
  title = 'Categorias';

  categories: Category[] = [];

  constructor(private categoryService: CategoryService) { }

  ngOnInit(): void {
    this.categoryService.getAll().subscribe(
      categories => this.categories = categories,
      error => alert('Error ao carregar a lista')
    )
  }

  deleteCategory(category: any) {
    const mustDelete = confirm('Deseja excluir este tema?');

    if (mustDelete) {
      this.categoryService.delete(category.id).subscribe(
        () => this.categories = this.categories.filter(
          element => element != category
        ), () => alert("Error ao tentar excluir")
      )
    }
  }

}
