import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AllProfilesComponent } from './component/all-profiles/all-profiles.component';
import { CreatProfileComponent } from './component/creat-profile/creat-profile.component';
import { DropdownComponent } from './component/dropdown/dropdown.component';

@NgModule({
  declarations: [
    AppComponent,
    AllProfilesComponent,
    CreatProfileComponent,
    DropdownComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
