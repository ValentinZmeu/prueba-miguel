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
    private http: HttpClient
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
    // Form the URL to send the DELETE request
    const url = `https://api.publicapis.org/entries/${endpoint.API}`;

    // Send the DELETE request to the API
    this.http.delete(url).subscribe(
      () => {
        console.log('Endpoint eliminado correctamente:', endpoint.API);
        // Update the list of endpoints after deletion
        
      },
      error => {
        console.error('Error al eliminar el endpoint:', error);
        // Handle the error as needed
      }
    );
    const updatedList = this.allData$.value.filter(item => item !== endpoint);
        this.allData$.next(updatedList);
  }


}
