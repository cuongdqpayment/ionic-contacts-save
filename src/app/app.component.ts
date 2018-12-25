import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { HomeDevicePage } from '../pages/home-device/home-device';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any;
  public static isWeb: boolean = false; //Dieu khien thiet bi

  constructor(private platform: Platform, 
              private statusBar: StatusBar, 
              private splashScreen: SplashScreen) {
    
  }

  ngOnInit() {

    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      if (  this.platform.is('mobileweb') 
         || this.platform.platforms()[0] == 'core'){
        //version web Chay tren web
        MyApp.isWeb = true;
      }
      console.log('MyAPP ngOnInit() Platform: ', this.platform.platforms())
      this.ionViewDidLoad();
    });
    
  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad() ')
    if (MyApp.isWeb) this.rootPage = HomePage; else this.rootPage=HomeDevicePage;
  }
  
  ionViewWillLeave() {
    console.log('ionViewWillLeave() ')
    
  }


}

