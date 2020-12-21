import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';

@NgModule({
  declarations: [ // Component, Directive, Pipes
    AppComponent,
    HeroesComponent
  ],
  imports: [ // Modules
    BrowserModule,
    FormsModule
  ],
  providers: [], // Service
  bootstrap: [AppComponent]
})
export class AppModule { }
