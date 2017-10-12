import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule }    from '@angular/http';

import { AppComponent } from './app.component';

import { MatGridListModule, MatCardModule, MatFormFieldModule, MatSliderModule, MatIconModule, MatButtonModule, MatCheckboxModule, MatSidenavModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ApiService } from './service/api.service';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    HttpModule, BrowserModule, MatButtonModule, MatCheckboxModule, MatSidenavModule, BrowserAnimationsModule,
    MatIconModule, MatSliderModule, MatFormFieldModule, MatCardModule, MatGridListModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
