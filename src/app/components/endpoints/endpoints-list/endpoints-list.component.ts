import {Component, EventEmitter, Output,Input} from '@angular/core';
import {MatCardModule} from "@angular/material/card";
import {MatButton} from "@angular/material/button";
import {MatIcon} from "@angular/material/icon";
import { MatDialog } from '@angular/material/dialog';
import {AsyncPipe, NgForOf} from "@angular/common";
import {EndpointInterface, EndpointsService} from "../../../services/data-services/endpoints.service";
import {MatGridList, MatGridTile} from "@angular/material/grid-list";
import { AuthService } from '../../../services/auth.service';
import { DialogAnimationsExampleDialog } from '../../../modal-borrado/modal-borrado.component';
@Component({
  selector: 'app-endpoints-list',
  standalone: true,
  imports: [
    MatCardModule,
    MatButton,
    MatIcon,
    NgForOf,
    AsyncPipe,
    MatGridList,
    MatGridTile,
    
  ],
  templateUrl: './endpoints-list.component.html',
  styleUrl: './endpoints-list.component.scss'
})
export class EndpointsListComponent {
  @Output() addUserRole = new EventEmitter<string>();
  name :string = '';
  constructor(
    public dataService: EndpointsService,
    private authService: AuthService,
    public dialog: MatDialog

  ) {
    dataService.loadAll();
  }
 
  deleteEndpoint(endpoint: EndpointInterface,api:string) {
    // TODO: ask user if want to delete specified endpoint
    // TODO: call dataService endpoint delete function
    this.name = api;
    const dialogRef = this.dialog.open(DialogAnimationsExampleDialog, {
      width: '500px',
      
      data: api
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log("llega al endpoint")
      result = true
      if (result) {
        this.dataService.delete(endpoint);
      }
    });
  }

  get userRole(): string {
    return this.authService.userRole;
  }

  
}
