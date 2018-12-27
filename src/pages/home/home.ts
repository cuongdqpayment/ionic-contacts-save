import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ContactsPage } from '../contacts/contacts';
import { CountriesPage } from '../countries/countries';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {}

  callContacts(){
    this.navCtrl.push(ContactsPage);
  }

  callCountries(){
    this.navCtrl.push(CountriesPage);
  }
}
