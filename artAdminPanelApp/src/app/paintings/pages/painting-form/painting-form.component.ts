import { Component, Inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DialogData } from '../paintigns-list/paintigns-list.component';
import { Painting } from '../../models/painting';
import { MatSnackBar } from '@angular/material/snack-bar';
import { PaintingsService } from '../../services/paintings.service';

export interface PaintFormData {
  isCreateForm: boolean;
  painting: Painting
}

@Component({
  selector: 'app-painting-form',
  templateUrl: './painting-form.component.html',
  styleUrls: ['./painting-form.component.scss']
})
export class PaintingFormComponent {
  get title() {
    if (this.data.isCreateForm) {
      return 'Formulaire de création';
    } else {
      return 'Formulaire de modification';
    }
  }

  get submitBtnName() {
    if (this.data.isCreateForm) {
      return 'Ajouter';
    }
    return 'Modifier';
  }

  paintingForm = this.fb.group({
    titre: ['', [Validators.required]],
    methode: ['', [Validators.required]],
    longueur: [0, [Validators.required]],
    largeur: [0, [Validators.required]],
    dateDeCreation: ['', [Validators.required]],
    description: ['', [Validators.required]],
    quantite: ['', [Validators.required]],
  });


  constructor(
    @Inject(MAT_DIALOG_DATA) public data: PaintFormData,
    private dialogRef: MatDialogRef<PaintingFormComponent>,
     private fb: FormBuilder,
    // private paintingService: PaintingsService,
    // private _snackBar: MatSnackBar) {
    // if (!data.isCreateForm) {
    //   this.setPaintingForm(data.painting);
    // }
  ){
  }  

  setPaintingForm(painting: Painting) {
    this.paintingForm.setValue({
      titre: painting.titre,
      methode: painting.methode,
      longueur: painting.longueur,
      largeur: painting.largeur,
      dateDeCreation: painting.dateDeCreation,
      description: painting.description,
      quantite: painting.quantite,
    })
  }

  onSubmit(){
    // if(this.paintingForm.valid){     
    //   if(this.data.isCreateForm){
    //     this.paintingForm.value.titre? = Date.now() + Math.random();
    //     this.paintingService.create(this.paintingForm.value as Painting)
        
    //     .subscribe(result => {
    //       this._snackBar.open(result, '', {
    //         duration: 2000,
    //         panelClass: ['bg-success']
    //       });

    //       this.dialogRef.close(true);
    //     });
    //   }else{
    //     this.paintingService.update(this.paintingForm.value as Painting)        
    //     .subscribe(result => {
    //       this._snackBar.open(result, '', {
    //         duration: 2000,
    //         panelClass: ['bg-success']
    //       });
    //       this.dialogRef.close(true);
    //     });
    //   }
    // }
  }
}
