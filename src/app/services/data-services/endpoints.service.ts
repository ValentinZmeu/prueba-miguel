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
    this.http.get('/assets/endpoints-data.json').subscribe((value: any) => {
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
    // TODO: implement endpoint removal
  }


}
