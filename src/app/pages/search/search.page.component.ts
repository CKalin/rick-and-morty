import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { merge, Subject } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { CharacterSearchService } from '@app/service/rick-and-morty-api/character-search.service';

@Component({
  templateUrl: 'search.page.component.html',
  styleUrls: ['search.page.component.scss']
})
export class SearchPageComponent {
  characterSelect: FormControl = new FormControl();

  searchTermChange = new Subject<string>();

  searchResults = merge(
    this.characterSelect.valueChanges.pipe(map(r => [r])),
    this.searchTermChange.pipe(
      switchMap(name => this.service.findByName(name)),
      map(r => r.results)
    )
  );

  constructor(private service: CharacterSearchService) {
  }

  search($event: string): void {
    this.searchTermChange.next($event);
  }
}
