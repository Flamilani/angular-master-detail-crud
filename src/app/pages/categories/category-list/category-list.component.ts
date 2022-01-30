import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {
  title = 'Categorias';

  listCategories = [
    {
      id: 1,
      title: "Lazer",
      type: [
        "Cinema", "Parque", "Praia"
      ]
    },
    {
      id: 2,
      title: "Comida",
      type: [
        "Pizza", "Lanche", "Salgados"
      ]
    },
    {
      id: 3,
      title: "Comida",
      type: [
        "Pizza", "Lanche", "Salgados"
      ]
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  alert(title: string, categoryId: number) {
    alert(title + ": " + categoryId);
  }

}
