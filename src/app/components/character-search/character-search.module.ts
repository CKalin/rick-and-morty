import { NgModule } from '@angular/core';
import { CharacterSearchComponent } from '@app/components/character-search/character-search.component';
import { CharacterSearchService } from '@app/service/rick-and-morty-api/character-search.service';
import { HttpClientModule } from '@angular/common/http';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    HttpClientModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    CommonModule
  ],
  providers: [CharacterSearchService],
  declarations: [CharacterSearchComponent],
  exports: [CharacterSearchComponent]
})
export class CharacterSearchModule {

}
