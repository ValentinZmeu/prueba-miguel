import {Component, EventEmitter, Output,Input} from '@angular/core';
import {MatCardModule} from "@angular/material/card";
import {MatButton} from "@angular/material/button";
import {MatIcon} from "@angular/material/icon";
import {AsyncPipe, NgForOf} from "@angular/common";
import {EndpointInterface, EndpointsService} from "../../../services/data-services/endpoints.service";
import {MatGridList, MatGridTile} from "@angular/material/grid-list";
import { AuthService } from '../../../services/auth.service';

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
  constructor(
    public dataService: EndpointsService,
    private authService: AuthService

  ) {
    dataService.loadAll();
  }
 
  deleteEndpoint(endpoint: EndpointInterface) {
    // TODO: ask user if want to delete specified endpoint
    // TODO: call dataService endpoint delete function
  }

  get userRole(): string {
    return this.authService.userRole;
  }
  
}
