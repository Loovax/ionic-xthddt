import { Component } from '@angular/core';

import { HomePage } from '../pages/home/home';
import { ShopPage } from '../pages/shop/shop';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = AboutPage;
  tab3Root = ShopPage;
  tab4Root = ContactPage;

  constructor() {

  }
}
