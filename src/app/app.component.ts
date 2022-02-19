import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'finansys';

  active?: boolean;

  @Input() breadcrumbActive?: string | undefined;

  @Input() subbreadcrumbActive?: string | undefined;

  pageTitle?: string;
}
