import {Component} from '@angular/core';
import {MatCardModule} from "@angular/material/card";
import {MatButton} from "@angular/material/button";
import {MatIcon} from "@angular/material/icon";
import {AsyncPipe, NgForOf} from "@angular/common";
import {EndpointInterface, EndpointsService} from "../../../services/data-services/endpoints.service";
import {MatGridList, MatGridTile} from "@angular/material/grid-list";

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

  constructor(
    public dataService: EndpointsService
  ) {
    dataService.loadAll();
  }

  deleteEndpoint(endpoint: EndpointInterface) {
    // TODO: ask user if want to delete specified endpoint
    // TODO: call dataService endpoint delete function
  }
}
