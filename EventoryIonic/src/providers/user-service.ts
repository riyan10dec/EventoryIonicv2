import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the UserService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class UserService {
  apiURL: string;
  constructor(public http: Http) {

  }
  public setApi(apiURL: string) {
    this.apiURL = apiURL;
  }
  public Login(userid: string, password: string) {
    let header = new Headers();
    header.append('Content-Type', 'application/x-www-form-urlencoded');
    var params = {
      "userid": userid,
      "password": password
    };
    var $obs = this.http.post(this.apiURL, params, {
      headers: header
    })
      .map(e => e);
    $obs.subscribe(
      data => {
        
      },
      err => {

      },
      () => console.log('Finish Auth'));

    return $obs;
  }
}
