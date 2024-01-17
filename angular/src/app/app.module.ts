import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';

import { EdgeHeaderComponent } from './edge-header/edge-header.component';
import { EdgeSummaryComponent } from './edge-summary/edge-summary.component';
import { EdgeSidebarComponent } from './edge-sidebar/edge-sidebar.component';
import { EdgeSectionBarComponent } from './edge-section-bar/edge-section-bar.component';


@NgModule({
  declarations: [
    AppComponent,
    EdgeHeaderComponent,
    EdgeSummaryComponent,
    EdgeSidebarComponent,
    EdgeSectionBarComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
