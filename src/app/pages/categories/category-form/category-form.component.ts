import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-category-form',
  templateUrl: './category-form.component.html',
  styleUrls: ['./category-form.component.css']
})
export class CategoryFormComponent implements OnInit {
  title = 'Categorias';
  active = true;
  subtitle = 'Nova Categoria';

  constructor() { }

  ngOnInit(): void {
  }

}
