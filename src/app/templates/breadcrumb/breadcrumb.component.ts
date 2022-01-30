import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.css']
})
export class BreadcrumbComponent implements OnInit {

  breadcrumb: string = "Home";

  @Input() breadcrumbActive: string | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
