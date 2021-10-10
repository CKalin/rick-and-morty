import { NgModule } from '@angular/core';
import { SearchPageComponent } from './search.page.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: SearchPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  declarations: [SearchPageComponent],
  exports: [RouterModule],
})
export class SearchPageModule {}
