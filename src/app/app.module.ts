import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SearchCardComponent } from './search-card/search-card.component';

import { NavComponent } from './core/nav/nav.component'
import {FooterComponent} from './core/footer/footer.component';

import { APP_CONFIG, AppConfig } from './config/app.config'

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCardModule, MatDatepickerModule, MatInputModule, MatNativeDateModule, MatRadioModule,
   MatToolbarModule } from '@angular/material';
import { MaterialModule } from './material.module';
import { CreateItemComponent } from './create-item/create-item.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {HttpClient, HttpClientModule} from '@angular/common/http';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
//import {HttpLoaderFactory} from './app.translate.factory';

import {AppRoutingModule} from './app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    SearchCardComponent,
    CreateItemComponent,
    NavComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MaterialModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule
    //  TranslateModule.forRoot({
    //   loader: {
    //     provide: TranslateLoader,
    //     useFactory: HttpLoaderFactory,
    //     deps: [HttpClient]
    //   }
    // })
  ],
 providers: [
    {provide: APP_CONFIG, useValue: AppConfig},
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
