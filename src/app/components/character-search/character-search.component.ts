import { Component, EventEmitter, Output } from '@angular/core';
import { ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Observable } from 'rxjs';
import { Character } from '@app/model/character';
import { CharacterSearchService } from '@app/service/rick-and-morty-api/character-search.service';
import { debounceTime, filter, map, startWith, switchMap } from 'rxjs/operators';
import { MatOptionSelectionChange } from '@angular/material/core';

@Component({
  selector: 'app-character-search',
  templateUrl: 'character-search.component.html',
  styleUrls: ['character-search.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: CharacterSearchComponent
    }
  ]
})
export class CharacterSearchComponent implements ControlValueAccessor {

  @Output()
  searchTermChange = new EventEmitter<string>();

  inputControl: FormControl = new FormControl('');
  registeredOnChange: (character: Character) => void;

  filteredOptions: Observable<Array<Character>> = this.inputControl.valueChanges.pipe(
    startWith(''),
    filter(s => typeof s === 'string'),
    debounceTime(300),
    switchMap(s => this.search.findByName(s)),
    map(r => r.results)
  );

  constructor(private search: CharacterSearchService) {
  }

  emitSearchTerm(): void {
    if (typeof this.inputControl.value === 'string') {
      this.searchTermChange.emit(this.inputControl.value);
    } else {
      this.searchTermChange.emit(null);
    }
    this.registeredOnChange(null);
  }

  selectCharacter($event: MatOptionSelectionChange): void {
    this.registeredOnChange($event.source.value);
  }

  displayCharacter(character: Character): string {
    return character?.name;
  }

  registerOnChange(fn: (character: Character) => void): void {
    this.registeredOnChange = fn;
  }

  registerOnTouched(fn: any): void {
    // Not needed yet.
  }

  writeValue(obj: any): void {
    // Not needed yet.
  }
}
