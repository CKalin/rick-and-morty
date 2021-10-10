import { NgModule } from '@angular/core';
import { SearchPageComponent } from './search.page.component';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CharacterSearchModule } from '@app/components/character-search/character-search.module';
import { ReactiveFormsModule } from '@angular/forms';
import { CharacterCardModule } from '@app/components/character-display/character-card.module';

const routes: Routes = [
  {
    path: '',
    component: SearchPageComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    CharacterSearchModule,
    ReactiveFormsModule,
    CharacterCardModule
  ],
  declarations: [SearchPageComponent],
  exports: [RouterModule],
})
export class SearchPageModule {}
