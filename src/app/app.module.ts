import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CatalogComponent } from './catalog/catalog.component';
import { CatalogListComponent } from './catalog/catalog-list/catalog-list.component';
import { CatalogItemComponent } from './catalog/catalog-item/catalog-item.component';
import { CatalogDetailComponent } from './catalog/catalog-detail/catalog-detail.component';
import { ShoppingListComponent } from './shopping/shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping/shopping-edit/shopping-edit.component';
import { AppDropDownDirective } from './shared/app-drop-down.directive';
import {ShoppingService} from './shopping/shopping.service';
import {CatalogService} from './catalog/catalog.service';
import {AppRoutingModule } from './app-routing.module';
import { CatalogEditComponent } from './catalog/catalog-edit/catalog-edit.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CatalogComponent,
    CatalogListComponent,
    CatalogItemComponent,
    CatalogDetailComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    AppDropDownDirective,
    CatalogEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  //  providers : [CatalogService]
  providers: [ShoppingService,CatalogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
