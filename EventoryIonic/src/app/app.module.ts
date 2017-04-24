import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { Eventory } from './app.component';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { DashboardPage } from '../pages/dashboard/dashboard';
import { InterestPage } from '../pages/interest/interest';
import { VoucherPage } from '../pages/voucher/voucher';
import { HowToRedeemPage } from '../pages/how-to-redeem/how-to-redeem';
import { RegisterPage } from '../pages/register/register';
import { FeedsPage } from '../pages/feeds/feeds';
import { FeaturedPage } from '../pages/featured/featured';

@NgModule({
  declarations: [
    Eventory,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    DashboardPage,
    InterestPage,
    VoucherPage,
    HowToRedeemPage,
    RegisterPage,
    FeedsPage,
    FeaturedPage
  ],
  imports: [
    IonicModule.forRoot(Eventory)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    Eventory,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    DashboardPage,
    InterestPage,
    VoucherPage,
    HowToRedeemPage,
    RegisterPage,
    FeedsPage,
    FeaturedPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
