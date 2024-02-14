import {Component,Inject} from '@angular/core';
import { EndpointsService } from '../services/data-services/endpoints.service';
import { EndpointsListComponent } from '../components/endpoints/endpoints-list/endpoints-list.component';
import {MatCardModule} from "@angular/material/card";
import {MatButton} from "@angular/material/button";
import {MatIcon} from "@angular/material/icon";

import {
  MatDialog,
  MatDialogRef,
  MatDialogActions,
  MatDialogClose,
  MatDialogTitle,
  MatDialogContent,
} from '@angular/material/dialog';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';

/**
 * @title Dialog Animations
 */


@Component({
  selector: 'ModalBorradoComponent',
  templateUrl: 'modal-borrado.component.html',
  standalone: true,
  imports: [MatButtonModule, MatDialogActions, MatDialogClose, MatDialogTitle, MatDialogContent],
})
export class DialogAnimationsExampleDialog {
  name: string='';
  confirmado: boolean= false;

  constructor(public dialogRef: MatDialogRef<DialogAnimationsExampleDialog>,  @Inject(MAT_DIALOG_DATA) public data: string) {
    this.name = data;
  }

  public onYesClick(): void {
    this.dialogRef.close(true);
    // Enviar true al cerrar el modal
  }
    
  
}


