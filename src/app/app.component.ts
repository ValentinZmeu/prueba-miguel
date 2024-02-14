import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MatToolbar} from "@angular/material/toolbar";
import {MatIcon} from "@angular/material/icon";
import {MatIconButton} from "@angular/material/button";
import {MatFormField, MatLabel} from "@angular/material/form-field";
import {MatOption, MatSelect} from "@angular/material/select";
import {NgForOf} from "@angular/common";
import {AuthService} from "./services/auth.service";
import {HttpClientModule} from "@angular/common/http";
import {EndpointsService} from "./services/data-services/endpoints.service";
import { EndpointInterface } from './services/data-services/endpoints.service';
import { EndpointsListComponent } from "./components/endpoints/endpoints-list/endpoints-list.component";
import { ModalCategoriasComponent } from './modal-categorias/modal-categorias.component';


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
@Component({
  selector: 'app-root',
  standalone:true,
  imports: [
    RouterOutlet,
    MatToolbar,
    MatIcon,
    MatIconButton,
    MatFormField,
    MatSelect,
    MatOption,
    NgForOf,
    MatLabel,
    HttpClientModule,
  ],
  providers: [
    EndpointsService,ModalCategoriasComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular';
  public endpoints: EndpointInterface[] = [];
  constructor(
    public authService: AuthService,
    public dialog: MatDialog,
    public dataService: EndpointsService,
   
   
  ) {
   
  }

  onRoleChange(event: any) {
    this.authService.setUserRole(event.value);
  }
  
  public categorias(): void {
    const dialogRef = this.dialog.open(ModalCategoriasComponent, {
      width: '200px',
      height: '500px',
      
      
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log("Modal cerrado");
    });
    
  }

  
  
 
}



