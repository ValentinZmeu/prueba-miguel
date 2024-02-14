import {Injectable} from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {HttpClient} from "@angular/common/http";

export interface EndpointInterface {
  API: string;
  Description: string;
  Auth: string;
  HTTPS: boolean;
  Cors: string;
  Link: string;
  Category: string;
}

@Injectable({
  providedIn: 'root',
})
export class EndpointsService {
  loading: boolean = false;
  allData$: BehaviorSubject<EndpointInterface[]> = new BehaviorSubject<EndpointInterface[]>([]);
  
  constructor(
    public http: HttpClient
  ) {

  }

  /**
   * Loads all the endpoints into allData$
   */
  loadAll() {
    this.loading = true;
    this.http.get('https://api.publicapis.org/entries').subscribe((value: any) => {
      this.allData$.next(value.entries);
      // delay loading status change
      setTimeout(() => this.loading = false, 1600);
    })
  }

  /**
   * Removes one endpoint from allData$ list.
   * @param endpoint
   */
  delete(endpoint: EndpointInterface) {
   
    const url = `https://api.publicapis.org/entries/${endpoint.API}`;
    this.http.delete(url).subscribe(
      () => {
        console.log('Endpoint eliminado correctamente:', endpoint.API); 
      },
      error => {
        console.error('Error al eliminar el endpoint:', error);
      }
    );
    const updatedList = this.allData$.value.filter(item => item !== endpoint);
        this.allData$.next(updatedList);
  }

}
