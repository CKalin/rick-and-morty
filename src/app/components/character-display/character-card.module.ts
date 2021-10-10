import { NgModule } from '@angular/core';
import { CharacterCardComponent } from '@app/components/character-display/character-card.component';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [CharacterCardComponent],
  imports: [
    MatCardModule,
    CommonModule
  ],
  exports: [CharacterCardComponent]
})
export class CharacterCardModule {
}
