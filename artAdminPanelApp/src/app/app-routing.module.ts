import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
{
  path: '',
  redirectTo: '',
  pathMatch: 'full'

},
{
  path: 'tableaux',
  loadChildren: () => import('./paintings/paintings.module').then(m => m.PaintingsModule)
},
{
  path: 'clients',
  loadChildren: () => import('./clients/clients.module').then(m => m.ClientsModule)
}

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
