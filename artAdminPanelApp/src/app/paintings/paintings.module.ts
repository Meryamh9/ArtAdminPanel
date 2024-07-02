import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaintingsRoutingModule } from './paintings-routing.module';
import { PaintingsComponent } from './paintings.component';


@NgModule({
  declarations: [
    PaintingsComponent
  ],
  imports: [
    CommonModule,
    PaintingsRoutingModule
  ]
})
export class PaintingsModule { }
