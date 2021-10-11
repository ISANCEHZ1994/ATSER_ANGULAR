import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms'; 
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppComponent } from './app.component';
import { CategoryItemComponent } from './components/category-item/category-item.component';
import { CategoryComponent } from './components/category/category.component';
import { HeaderComponent } from './components/header/header.component';
import { ButtonComponent } from './components/button/button.component';
import { AddCategoryComponent } from './components/add-category/add-category.component';
import { ModalContentComponent } from './components/modal-content/modal-content.component';

@NgModule({
  declarations: [
    AppComponent,
    CategoryItemComponent,
    CategoryComponent,
    HeaderComponent,
    ButtonComponent,
    AddCategoryComponent,
    ModalContentComponent,
 
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FontAwesomeModule,
    FormsModule
  ],
  providers: [
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
