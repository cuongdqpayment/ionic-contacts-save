import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ContactsPage } from '../contacts/contacts';

@Component({
  selector: 'page-home-device',
  templateUrl: 'home-device.html'
})
export class HomeDevicePage {

  constructor(public navCtrl: NavController) {

  }

  callContacts(){
    this.navCtrl.push(ContactsPage);
  }
}
