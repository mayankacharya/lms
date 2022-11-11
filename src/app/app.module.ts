import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule, NgForm } from '@angular/forms';
import { UserdashboardComponent } from './userdashboard/userdashboard.component';
import { HttpClientModule } from '@angular/common/http';
import { AdminComponent } from './admin/admin.component';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';
import {  ReactiveFormsModule } from '@angular/forms';





// import {NgModule} from '@angular/core';



@NgModule({

  declarations: [
    AppComponent,
    LoginComponent,
    UserdashboardComponent,
    AdminComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
     MatFormFieldModule,
   MatInputModule,
   MatButtonModule,
   HttpClientModule,
   BrowserAnimationsModule,
   NoopAnimationsModule,
   MatTableModule,
   MatIconModule,
   FormsModule,








  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [
    MatButtonModule,
    MatInputModule,
    ]
})
export class AppModule { }
