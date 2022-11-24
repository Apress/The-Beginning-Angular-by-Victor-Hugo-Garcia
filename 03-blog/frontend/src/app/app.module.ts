import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';

import { AppRoutingModule } from './app.routes';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './components/home/home.component';
import { PostComponent } from './components/post/post.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AddPostComponent } from './components/add-post/add-post.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    PostComponent,
    DashboardComponent,
    AddPostComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
