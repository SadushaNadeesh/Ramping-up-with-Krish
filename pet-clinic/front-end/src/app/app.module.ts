import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OwnersModule } from './owners/owners.module';
import { PetModule } from './pet/pet.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    OwnersModule,
    PetModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
