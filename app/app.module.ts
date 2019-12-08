import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { iApp } from '../app/app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { ShopPage } from '../pages/shop/shop';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

@NgModule({
  declarations: [
    iApp,
    AboutPage,
    ContactPage,
    HomePage,
    ShopPage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(iApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    iApp,
    AboutPage,
    ContactPage,
    HomePage,
    ShopPage,
    TabsPage
  ],
  providers: [
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
