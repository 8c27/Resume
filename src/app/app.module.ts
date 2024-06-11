import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './page/home/home.component';
import { SidebarComponent } from './component/sidebar/sidebar.component';
import { AdminLayoutComponent } from 'src/layouts/admin-layout/admin-layout.component';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { DemoComponent } from './page/demo/demo.component';
import { ClockComponent } from './component/clock/clock.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { OtherBarComponent } from './component/other-bar/other-bar.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SidebarComponent,
    AdminLayoutComponent,
    DemoComponent,
    ClockComponent,
    OtherBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    BrowserAnimationsModule,
    MatIconModule,
    FontAwesomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
