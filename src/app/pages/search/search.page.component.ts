import { Component } from '@angular/core';
import { CharacterSearchService } from '@app/service/rick-and-morty-api/character-search.service';

@Component({
  templateUrl: 'search.page.component.html',
  styleUrls: ['search.page.component.scss']
})
export class SearchPageComponent {

  result = this.search.findByName('rick');

  constructor(private search: CharacterSearchService) {}

}
