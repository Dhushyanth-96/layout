import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { SimpleComponent } from './layout/simple-layout/simple-component/simple-component.component';
import { DashboardLayoutComponent } from './layout/dashboard-layout/dashboard-layout.component';
import { DashboardHeaderComponent } from './layout/dashboard-layout/dashboard-header/dashboard-header/dashboard-header.component';
import { DashboardSidebarComponent } from './layout/dashboard-layout/dashboard-sidebar/dashboard-sidebar/dashboard-sidebar.component';




@NgModule({
  declarations: [
    AppComponent,
    DashboardLayoutComponent,
    DashboardHeaderComponent,
    DashboardSidebarComponent,
    SimpleComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
