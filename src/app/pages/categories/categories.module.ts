import { BreadcrumbComponent } from './../../templates/breadcrumb/breadcrumb.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoriesRoutingModule } from './categories-routing.module';
import { CategoryListComponent } from './category-list/category-list.component';
import { CategoryFormComponent } from './category-form/category-form.component';


@NgModule({
  declarations: [
    CategoryListComponent,
    CategoryFormComponent,
    BreadcrumbComponent
  ],
  imports: [
    CommonModule,
    CategoriesRoutingModule
  ],
  exports: [
    BreadcrumbComponent
  ]
})
export class CategoriesModule { }
