import {Component, EventEmitter, Output,Input, OnInit} from '@angular/core';
import {MatCardModule} from "@angular/material/card";
import {MatButton} from "@angular/material/button";
import {MatIcon} from "@angular/material/icon";
import { MatDialog } from '@angular/material/dialog';
import {AsyncPipe, NgForOf} from "@angular/common";
import {MatGridList, MatGridTile} from "@angular/material/grid-list";
import { EndpointsService, EndpointInterface } from '../services/data-services/endpoints.service';
import { DialogAnimationsExampleDialog } from '../modal-borrado/modal-borrado.component';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'ModalCategoriasComponent',
  standalone: true,
  imports: [
    MatCardModule,
    MatButton,
    MatIcon,
    NgForOf,
    AsyncPipe,
    MatGridList,
    MatGridTile,
    HttpClientModule,
  ],
  templateUrl: './modal-categorias.component.html',
  styleUrl: './modal-categorias.component.scss',
  providers:[EndpointsService, HttpClientModule]
}) 

export class ModalCategoriasComponent implements OnInit{
  @Output() addUserRole = new EventEmitter<string>();
  public arrayUnico: any[] = [];
  public arrayrepetidos: any[] = [];
  constructor(
    public dataService: EndpointsService,
    public dialog: MatDialog
    
  ) {
    console.log("constructr")
    dataService.loadAll();
    this.obtenerCategoriasUnicas();
  }
 
  
  @Output() allDataOutput: EventEmitter<EndpointInterface[]> = new EventEmitter<EndpointInterface[]>();

  ngOnInit(): void {
  
   

    
  }
  
  public obtenerCategoriasUnicas() {
    console.log("entrando")
    console.log(this.dataService.loading);
    var i = 0;
      this.dataService.allData$.forEach(item => {
        if(i != 0){
          item.forEach(categorias => {
            if(!this.arrayUnico.includes(categorias.Category))
            this.arrayUnico.push(categorias.Category); 
          })
         
        }
       i++;
     });

    console.log(this.arrayUnico);
  }
  
  // public comprobarRepetidos(array: any[]){
  //   array.forEach(item =>{
  //     if(this.arrayUnico.includes(item.Category)){
  //       this.arrayUnico.push(item.Category);
  //     }
  //   })
    
  // }
}
