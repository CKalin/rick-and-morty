import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { BehaviorSubject, combineLatest, merge, Observable, Subject } from 'rxjs';
import { debounceTime, map, switchMap, tap } from 'rxjs/operators';
import { CharacterSearchService } from '@app/service/rick-and-morty-api/character-search.service';
import { SearchResult } from '@app/model/serach-result';
import { Character } from '@app/model/character';

@Component({
  templateUrl: 'search.page.component.html',
  styleUrls: ['search.page.component.scss']
})
export class SearchPageComponent {
  private searchTermChange = new Subject<string>();

  characterSelect: FormControl = new FormControl();
  selectedPage = new BehaviorSubject<number>(0);

  searchResult: Observable<SearchResult<Character>> = merge(
    this.characterSelect.valueChanges.pipe(map(c => this.toSearchResult(c))),
    combineLatest([this.searchTermChange, this.selectedPage]).pipe(
      debounceTime(0),
      switchMap(([name, page]) => this.service.findByName(name, page)),
      tap(_ => window.scroll(0, 0))
    ),
  );

  constructor(private service: CharacterSearchService) {
  }

  search($event: string): void {
    this.selectedPage.next(0);
    this.searchTermChange.next($event);
  }

  selectPage(page: number): void {
    this.selectedPage.next(page);
  }

  private toSearchResult(r: Character): SearchResult<Character> {
    return {
      info: {page: 0, pageSize: 1, pages: 1, count: 1},
      results: [r]
    };
  }
}
