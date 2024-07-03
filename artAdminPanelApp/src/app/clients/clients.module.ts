import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientsRoutingModule } from './clients-routing.module';
import { ClientsComponent } from './clients.component';
import { ClientsListComponent } from './pages/clients-list/clients-list.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    ClientsComponent,
    ClientsListComponent
  ],
  imports: [
    CommonModule,
    ClientsRoutingModule,
    SharedModule
  ]
})
export class ClientsModule { }
