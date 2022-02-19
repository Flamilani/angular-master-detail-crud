import { NavbarComponent } from './../../templates/navbar/navbar.component';
import { BreadcrumbComponent } from './../../templates/breadcrumb/breadcrumb.component';
import { ShareModule } from './../../share/share.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EntriesRoutingModule } from './entries-routing.module';
import { EntryListComponent } from './entry-list/entry-list.component';

@NgModule({
  declarations: [
    EntryListComponent
  ],
  imports: [
    CommonModule,
    EntriesRoutingModule
  ]
})
export class EntriesModule { }
