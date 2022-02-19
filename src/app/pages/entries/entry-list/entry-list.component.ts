import { Entry } from './../models/entry.model';
import { Component, OnInit } from '@angular/core';
import { EntryService } from '../services/entry.service';

@Component({
  selector: 'app-entry-list',
  templateUrl: './entry-list.component.html',
  styleUrls: ['./entry-list.component.css']
})
export class EntryListComponent implements OnInit {

  title = 'Lançamentos';
  active = true;

  entries: Entry[] = [];

  constructor(private entryService: EntryService) { }

  ngOnInit(): void {
    this.entryService.getAll().subscribe(
      entries => this.entries = entries,
      error => alert('Error ao carregar a lista')
    )
  }

  deleteEntry(entry: any) {
    const mustDelete = confirm('Deseja excluir este tema?');

    if (mustDelete) {
      this.entryService.delete(entry.id).subscribe(
        () => this.entries = this.entries.filter(
          element => element != entry
        ), () => alert("Error ao tentar excluir")
      )
    }
  }


}
