import {Component, ViewChild} from '@angular/core';
import { Platform,Nav } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';
import { HomePage } from '../pages/home/home';
import { InterestPage } from '../pages/interest/interest'
import { VoucherPage } from '../pages/voucher/voucher'
import { HowToRedeemPage } from '../pages/how-to-redeem/how-to-redeem'


@Component({
  templateUrl: 'app.html'
})
export class Eventory {
  @ViewChild(Nav) nav: Nav;
  rootPage = HomePage;
  pages: Array<{title: string, component: any}>

  constructor(platform: Platform) {
    platform.ready().then(() => {
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
    this.pages = [
      { title: 'Interest', component: InterestPage },
      { title: 'Voucher', component: VoucherPage },
      { title: 'How To Redeem', component: HowToRedeemPage },
      { title: 'Logout', component: HomePage },
    ];
  }
  openPage(page) {
    this.nav.push(page.component);
  }
}
