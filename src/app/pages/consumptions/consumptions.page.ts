import { Component, OnInit } from '@angular/core';
import { ConsumptionsService } from './services/consumptions.service';
import { Router } from '@angular/router';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { Platform } from '@ionic/angular';

import { ThemeableBrowser, ThemeableBrowserOptions, ThemeableBrowserObject } from '@ionic-native/themeable-browser/ngx';


declare const cordova: any;

@Component({
  selector: 'app-consumptions',
  templateUrl: './consumptions.page.html',
  styleUrls: ['./consumptions.page.scss']
})
export class ConsumptionsPage implements OnInit {
  constructor(
    private consumptionsService: ConsumptionsService,
    private router: Router,
    private webView: InAppBrowser,
    private platform: Platform,
    private themeableBrowser: ThemeableBrowser
  ) { }

  ngOnInit() {
  }

  onSelectedLine(line: string) {
    console.log(line);
    this.consumptionsService.lineSelected = line;
  }


  onBrowser() {

    this.platform.ready().then(() => {

      this.webView.create('http://localhost:8888', '_self', { location: 'no' });

    });


  }

  onBrowserTheme() {

    const options: ThemeableBrowserOptions = {
      statusbar: {
        color: '#00377b',
      },
      toolbar: {
        height: 44,
        color: '#00377b',
      },
      title: {
        color: '#ffffff',
        showPageTitle: true,
        staticText: 'Llamadas',
      },
      closeButton: {
        wwwImage: 'assets/imgs/back.png',
        align: 'left',
        event: 'closePressed',
      },
      backButtonCanClose: true,
    }


    this.platform.ready().then(() => {

      const browser: ThemeableBrowserObject = this.themeableBrowser.create('http://localhost:8888/', '_blank', options);

    });


  }



}
