import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'admin-dashboard', component: AdminDashboardComponent }
];

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
