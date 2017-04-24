import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { EventService } from '../../providers/event-service';
import { Config } from '../../app-config'

/*
  Generated class for the Feeds page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-feeds',
  templateUrl: 'feeds.html',
  providers: [EventService]
})
export class FeedsPage {
  eventService: EventService;
  config: Config;

  constructor(public navCtrl: NavController, public navParams: NavParams, eventService : EventService) {
    this.config = new Config();
    this.eventService = eventService;
    this.eventService.setApi(this.config.getApiURL());
    var $obs = this.eventService.getFeeds("editorsPick").then(
      data => {
        console.log(data);
          var x = data;
      }
    );
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FeedsPage');
  }

}
