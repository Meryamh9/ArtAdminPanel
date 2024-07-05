import { Component } from '@angular/core';
import { ClientFormComponent } from '../client-form/client-form.component';
import { MatDialog } from '@angular/material/dialog';

export interface DialogData {
  isCreateForm: any;
  animal: 'panda' | 'unicorn' | 'lion';
}

@Component({
  selector: 'app-clients-list',
  templateUrl: './clients-list.component.html',
  styleUrls: ['./clients-list.component.scss']
})
export class ClientsListComponent {
  panelOpenState = false;

  constructor(public dialog: MatDialog) {

  }

  openClientForm() {
    const dialogRef = this.dialog.open(ClientFormComponent, {
      height: '85%',
      width: '50%',
      data: {
        animal: 'panda',
        // isCreateForm: painting ? false : true,
        // painting: painting ? painting : undefined
      }
    });
  }

  confirmDelete(): void {
    if (confirm("Êtes-vous sûr de vouloir supprimer cet élément ?")) {
      this.deleteItem();
    }
  }

  deleteItem(): void {
    // Logic for deleting the item
    console.log('Item deleted');
  }

}
