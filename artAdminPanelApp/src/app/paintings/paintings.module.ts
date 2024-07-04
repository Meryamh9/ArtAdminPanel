import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaintingsRoutingModule } from './paintings-routing.module';
import { PaintingsComponent } from './paintings.component';
import { SharedModule } from '../shared/shared.module';
import { PaintignsListComponent } from './pages/paintigns-list/paintigns-list.component';


@NgModule({
  declarations: [
    PaintingsComponent,
    PaintignsListComponent
  ],
  imports: [
    CommonModule,
    PaintingsRoutingModule,
    SharedModule 
  ]
})
export class PaintingsModule { }
