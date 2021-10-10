import { NgModule } from '@angular/core';
import { SearchPageComponent } from './search.page.component';
import { RouterModule, Routes } from '@angular/router';
import { CharacterSearchService } from '@app/service/rick-and-morty-api/character-search.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

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
    HttpClientModule
  ],
  providers: [
    CharacterSearchService
  ],
  declarations: [SearchPageComponent],
  exports: [RouterModule],
})
export class SearchPageModule {}
