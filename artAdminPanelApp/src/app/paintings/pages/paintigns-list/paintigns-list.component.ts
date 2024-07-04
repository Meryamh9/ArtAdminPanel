import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Painting } from '../../models/painting';
import { PaintingFormComponent } from '../painting-form/painting-form.component';
import { Observable } from 'rxjs';

export interface DialogData {
  animal: 'panda' | 'unicorn' | 'lion';
}
@Component({
  selector: 'app-paintigns-list',
  templateUrl: './paintigns-list.component.html',
  styleUrls: ['./paintigns-list.component.scss']
})
export class PaintignsListComponent {

  painting$!: Observable<Painting[]>;
  
  constructor(public dialog: MatDialog) {

  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  fetchData() {
    //this.painting$ = this.giftService.get();
  }

  openPaintingForm() {
    const dialogRef = this.dialog.open(PaintingFormComponent, {
      height: '85%',
      width: '60%',
      data: {
        animal: 'panda',
        // isCreateForm: painting ? false : true,
        // painting: painting ? painting : undefined
      }
    });

    dialogRef.afterClosed()
    .subscribe(result => {
      if (result) {
        //this.fetchData();
      }
    });

}
}
