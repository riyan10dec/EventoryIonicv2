import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { UserService } from '../../providers/user-service';
import { Config } from '../../app-config'
import { RegisterPage } from '../register/register'
import { DashboardPage } from '../dashboard/dashboard'
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [UserService]
})
export class HomePage {
  userid: string;
  password: string;
  userService: UserService;
  config: Config;
  constructor(public navCtrl: NavController, userService: UserService) {
    this.userService = userService;
    this.userService.setApi("");
  }
  public Login(userid: string, password: string) {
    this.navCtrl.setRoot(DashboardPage);
    // var $obs = this.userService.Login(userid, password)
    //   .subscribe(
    //   data => {
    //     if(data.status == 200){
    //       this.navCtrl.push(DashboardPage);
    //     }
    //   },
    //   err => { },
    //   () => { }
    //   );
  }
  public Register(){
    this.navCtrl.push(RegisterPage);
  }
}
