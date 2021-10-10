import { NgModule } from '@angular/core';
import { SearchPageComponent } from './search.page.component';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CharacterSearchModule } from '@app/components/character-search/character-search.module';
import { ReactiveFormsModule } from '@angular/forms';

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
    ReactiveFormsModule
  ],
  declarations: [SearchPageComponent],
  exports: [RouterModule],
})
export class SearchPageModule {}
