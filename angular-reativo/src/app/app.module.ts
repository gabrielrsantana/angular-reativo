import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SecondComponentComponent } from './components/second-component/second-component.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    SecondComponentComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
