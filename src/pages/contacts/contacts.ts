import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Contacts, Contact, ContactField, ContactName } from '@ionic-native/contacts';


import Log from '../../assets/log/log-debug';

@Component({
  selector: 'page-contacts',
  templateUrl: 'contacts.html'
})
export class ContactsPage {
  
  constructor( public navCtrl: NavController,
               private contacts: Contacts) {}

    createContact(){
      let contact: Contact = this.contacts.create();
      contact.name = new ContactName(null, 'Doan', 'Quoc Cuong');
      contact.phoneNumbers = [new ContactField('mobile', '0903500888')];
      contact.save().then(
        () => {
          console.log('Contact saved!', contact);
          Log.put('Contact saved!', contact);
          },
        (error: any) => {
          console.error('Error saving contact.', error);
          Log.put('Error saving contact.', error);
        }
      ); 
    }

    pickContacts(){
      this.contacts.pickContact()
                   .then((response: Contact) => { 
                      console.log(response);
                      Log.put(response);
                   });
    }

    listContacts(){
      console.log('this.contacts: ',this.contacts);
      Log.put('this.contacts: ',this.contacts);
    }
    
}




