import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // Import BrowserAnimationsModule
import { MatToolbarModule } from '@angular/material/toolbar'; // Import MatToolbarModule
import { MatSelectModule } from '@angular/material/select'; // Import MatSelectModule
import { MatButtonModule } from '@angular/material/button'; // Import MatButtonModule
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router'; // Import RouterModule for router-outlet

import { EndpointsService } from './services/data-services/endpoints.service';
import { AuthService } from './services/auth.service';
import { AppComponent } from './app.component';
import { ModalCategoriasComponent } from './modal-categorias/modal-categorias.component';
import { routes } from './app.routes';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule, // Include BrowserAnimationsModule
    MatToolbarModule, // Include MatToolbarModule
    MatSelectModule, // Include MatSelectModule
    MatButtonModule, // Include MatButtonModule
    HttpClientModule,
    RouterModule.forRoot(routes), // Include RouterModule for router-outlet
    AppRoutingModule,
  ],
  providers: [
    EndpointsService,
    AuthService
  ],
 
})
export class AppModule { }
