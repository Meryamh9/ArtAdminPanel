import { Component, Inject } from '@angular/core';
import { Client } from '../../models/client';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, Validators } from '@angular/forms';

export interface ClientFormData {
  isCreateForm: boolean;
  client: Client
}
@Component({
  selector: 'app-client-form',
  templateUrl: './client-form.component.html',
  styleUrls: ['./client-form.component.scss']
})
export class ClientFormComponent {
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

  clientForm = this.fb.group({
    nom: ['', [Validators.required]],
    prenom: ['', [Validators.required]],
    adresse: ['', [Validators.required]],
    complmentAdresse: ['', [Validators.required]],
    ville: ['', [Validators.required]],
    codePostal: [0, [Validators.required]],
    adresseMail: ['', [Validators.required]],
    telephone: [0, [Validators.required]],
  });

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: ClientFormData,
    private dialogRef: MatDialogRef<ClientFormComponent>,
     private fb: FormBuilder,
    // private paintingService: PaintingsService,
    // private _snackBar: MatSnackBar) {
    // if (!data.isCreateForm) {
    //   this.setPaintingForm(data.painting);
    // }
  ){
  }

  setPaintingForm(client: Client) {
    this.clientForm.setValue({
      nom: client.nom,
      prenom: client.prenom,
      adresse: client.adresse,
      complmentAdresse: client.complmentAdresse,
      ville: client.ville,
      codePostal: client.codePostal,
      adresseMail: client.adresseMail,
      telephone: client.telephone,
    })
  }

  onSubmit(){

  }



}
