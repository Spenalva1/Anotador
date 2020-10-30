import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ScorerPageRoutingModule } from './scorer-routing.module';

import { ScorerPage } from './scorer.page';
import { FieldComponent } from '../shared/components/field/field.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ScorerPageRoutingModule
  ],
  declarations: [ScorerPage, FieldComponent]
})
export class ScorerPageModule {}
