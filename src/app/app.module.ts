import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { LayoutModule } from '@angular/cdk/layout';
import { ScrollDispatchModule } from '@angular/cdk/scrolling';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';

import { AppComponent } from './app.component';
import { CdkBreakpointComponent } from './cdk-breakpoint/cdk-breakpoint.component';
import { TestComponent } from './test/test.component';

@NgModule({
  declarations: [
    AppComponent,
    CdkBreakpointComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    LayoutModule,
    MatButtonModule,
    MatMenuModule,
    ScrollDispatchModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
