import { Injectable } from '@angular/core';
import { Http,Headers } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the EventService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class EventService {
  data:any;
  apiURL: string;
  constructor(public http: Http) {

  }
  public setApi(apiURL: string) {
    this.apiURL = apiURL;
  }

  public getFeeds(route: string){
    return new Promise(resolve => {
    this.http.get(this.apiURL+route)
      .map(res => res.json())
      .subscribe(data => {
        this.data = data;
        resolve(this.data);
      });
  });

  }

}
