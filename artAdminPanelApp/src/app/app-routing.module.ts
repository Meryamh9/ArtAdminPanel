import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';

const routes: Routes = [

  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'admin-dashboard', component: AdminDashboardComponent }
];

  //{ path: 'tableauDeBord', component: TableauDeBordComponent },
  //{ path: 'clients', component: ClientsComponent },
//   {
//     path: 'tableaux',
//     loadChildren: () => import('./paintings/paintings.component').then(m => m.PaintingsComponent)
//   },
//   { path: '', redirectTo: '/tableauDeBord', pathMatch: 'full' },
//   { path: '**', redirectTo: '/tableauDeBord' }
// ];

{
  path: '',
  redirectTo: 'tableaux',
  pathMatch: 'full'

},
{
  path: 'tableaux',
  loadChildren: () => import('./paintings/paintings.module').then(m => m.PaintingsModule)
},


];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
