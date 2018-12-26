import { Component } from '@angular/core';
import { NavController, LoadingController, ToastController } from 'ionic-angular';

import { Contacts, Contact, ContactField, ContactName } from '@ionic-native/contacts';


import Log from '../../assets/log/log-debug';

@Component({
  selector: 'page-contacts',
  templateUrl: 'contacts.html'
})
export class ContactsPage {
  
  phoneContacts = [];

  constructor( public navCtrl: NavController,
               private loadingCtrl: LoadingController,
               private toastCtrl: ToastController,
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

    /** Goi menu he thong de mo danh ba ra
     * ket qua sau khi chon mot danh ba nao do thi se in ra
     */
    pickContacts(){
      let loading = this.loadingCtrl.create({
        content: 'Đợi load danh bạ từ máy để bạn chọn...'
      });
      loading.present();

      this.contacts.pickContact()
                   .then((oneContact: Contact) => { 

                      this.showToast(loading,'Bạn đã chọn được 1 danh bạ ' + (oneContact.displayName?oneContact.displayName:'Không biết tên') , 0, 1);

                      console.log(oneContact);
                      Log.put(oneContact);

                      console.log('id: ',oneContact.id, oneContact.rawId);
                      console.log('Display name: ',oneContact.displayName);
                      console.log('GivenName: ',oneContact.name.givenName);
                      if (oneContact.phoneNumbers){
                        oneContact.phoneNumbers.forEach((value,index)=>{
                          let obj;
                          obj = value;
                          //so dien thoai lien quan
                          console.log('PhoneNumber : ',obj.id, obj.type, obj.value);
                        })
                      }
                      if (oneContact.photos){
                        oneContact.photos.forEach((value,index)=>{
                          let obj;
                          obj = value;
                          //anh dai dien
                          console.log('Photo: ',obj.id, obj.type, obj.value)
                        });
                      }

                      if (oneContact.urls){
                        oneContact.urls.forEach((value,index)=>{
                          let obj;
                          obj = value;
                          //link nick google plus or facebook...
                          console.log('Url: ',obj.id, obj.type, obj.value)
                        });
                      }

                   })
                   .catch(err=>{
                    this.showToast(loading,'Lỗi đọc danh bạ: ' + JSON.stringify(err));
                    //console.log('Khong chon danh ba nao ca');
                    Log.put('Khong chon danh ba nao ca');
                   });
    }

    listContacts(){

      let loading = this.loadingCtrl.create({
        content: 'Đợi lọc dữ liệu từ danh bạ'
      });
      loading.present();
      // console.log('this.contacts: ',this.contacts);
      // Log.put('this.contacts: ',this.contacts);      
      //Lay toan bo danh ba trong may
      this.contacts.find(['displayName', 'name', 'phoneNumbers', 'emails', 'photos', 'urls', 'organizations', 'addresses', 'birthday', 'ims'], {filter: "", multiple: true})
      .then(data => {
        //loading.dismiss();
        this.showToast(loading,'Đã đọc xong danh bạ ' + data.length + 'số', 0, 1);
        
        this.phoneContacts = data;

        console.log('this.contacts: ',data);
        Log.put('this.contacts: ',data);
      })
      .catch(err=>{
        this.showToast(loading,'Lỗi đọc danh bạ: ' + JSON.stringify(err));
      });


    }

    showToast(ld:any, msg:string, dur?:0|1|2, pos?:0|1|2){

      if (ld) ld.dismiss();
      this.toastCtrl.create({
        message: msg,
        duration: dur==0?2000:dur==1?3000:5000,
        position: pos==0?'top':pos==1?'middle':'bottom'
      }).present();
    }
    
}



