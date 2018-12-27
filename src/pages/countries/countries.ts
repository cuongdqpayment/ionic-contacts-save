import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ContactsPage } from '../contacts/contacts';

import { ApiHttpPublicService } from '../../services/apiHttpPublicServices'

@Component({
  selector: 'page-countries',
  templateUrl: 'countries.html'
})
export class CountriesPage {

  countries:any = [];
  countriesOrigin:any = [];
  isSearch: boolean = false;
  searchString:string='';

  constructor(public navCtrl: NavController,
              private http: ApiHttpPublicService) {}

  ngOnInit(){
    this.getCountries();
  }

  getCountries(){

    this.http.getAllCoutries()
    .then(countries=>{
      this.countriesOrigin = countries;
      this.countries = this.countriesOrigin;
    })
    .catch(err=>{
      this.countriesOrigin = [];
      this.countries =  [];
    })

  }

  goSearch(){
    this.isSearch = true;
  }

  onInput(e){
    this.countries = this.countriesOrigin.filter(x=>(
      x.name.toLowerCase().indexOf(this.searchString.toLowerCase())>=0
      ||
      (x.callingCodes&&x.callingCodes.find(y=>y.indexOf(this.searchString)==0))
      ))
  }

  searchEnter(){
    this.isSearch = false;
  }
}
