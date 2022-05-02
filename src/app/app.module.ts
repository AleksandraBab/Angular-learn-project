import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidenavModule } from './sidenav/sidenav.module';

@NgModule({
	declarations: [AppComponent, HeaderComponent],
	imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule, MatToolbarModule, MatIconModule, MatButtonModule, SidenavModule],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
