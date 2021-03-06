import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { HomeDevicePage } from '../pages/home-device/home-device';
import { ContactsPage } from '../pages/contacts/contacts';
import { CountriesPage } from '../pages/countries/countries';



import { Contacts } from '@ionic-native/contacts';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { StorageServiceModule } from 'angular-webstorage-service';
import { ApiStorageService } from '../services/apiStorageService';
import { ApiLocationService } from '../services/apiLocationService';

import { ApiAuthService } from '../services/apiAuthService';
import { ApiImageService } from '../services/apiImageService';
import { ApiChattingService } from '../services/apiChattingService';
import { ApiHttpPublicService } from '../services/apiHttpPublicServices';

import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { RequestInterceptor } from '../interceptors/requestInterceptor';
import { ResponseInterceptor } from '../interceptors/responseInterceptor';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    HomeDevicePage,
    ContactsPage,
    CountriesPage
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    StorageServiceModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    HomeDevicePage,
    ContactsPage,
    CountriesPage
  ],
  providers: [
    StatusBar,
    Contacts,
    SplashScreen,
    ApiAuthService,
    ApiImageService,
    ApiStorageService,
    ApiChattingService,
    ApiLocationService,
    ApiHttpPublicService,
    RequestInterceptor,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: RequestInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ResponseInterceptor,
      multi: true
    },
    { provide: ErrorHandler, 
      useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
