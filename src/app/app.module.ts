import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './app.routing';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    DashboardComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([]),
    appRoutes,
  ],
  providers: [
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
