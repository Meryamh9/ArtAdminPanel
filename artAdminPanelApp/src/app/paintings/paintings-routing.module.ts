import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaintingsComponent } from './paintings.component';
import { PaintignsListComponent } from './pages/paintigns-list/paintigns-list.component';

const routes: Routes = [
  {
    path: '',
    component: PaintignsListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PaintingsRoutingModule { }
