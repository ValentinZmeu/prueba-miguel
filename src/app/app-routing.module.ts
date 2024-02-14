import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {EndpointsListComponent} from "./components/endpoints/endpoints-list/endpoints-list.component";





const routes: Routes = [
    {
        path: "",
        component: EndpointsListComponent
      }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }



