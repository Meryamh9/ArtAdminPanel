import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaintingsRoutingModule } from './paintings-routing.module';
import { PaintingsComponent } from './paintings.component';
import { SharedModule } from '../shared/shared.module';
import { PaintignsListComponent } from './pages/paintigns-list/paintigns-list.component';
import { PaintingFormComponent } from './pages/painting-form/painting-form.component';


@NgModule({
  declarations: [
    PaintingsComponent,
    PaintignsListComponent,
    PaintingFormComponent
  ],
  imports: [
    CommonModule,
    PaintingsRoutingModule,
    SharedModule 
  ]
})
export class PaintingsModule { }
