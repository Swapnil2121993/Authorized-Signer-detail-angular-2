import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import {RouterModule,Routes} from '@angular/router';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {
  FullscreenOverlayContainer,
  MdAutocompleteModule,
  MdButtonModule,
  MdButtonToggleModule,
  MdCardModule,
  MdCheckboxModule,
  MdChipsModule,
  MdCoreModule,
  MdTableModule,
  MdDatepickerModule,
  MdDialogModule,
  MdExpansionModule,
  MdGridListModule,
  MdIconModule,
  MdInputModule,
  MdListModule,
  MdMenuModule,
  MdNativeDateModule,
  MdPaginatorModule,
  MdProgressBarModule,
  MdProgressSpinnerModule,
  MdRadioModule,
  MdRippleModule,
  MdSelectModule,
  MdSidenavModule,
  MdSliderModule,
  MdSlideToggleModule,
  MdSnackBarModule,
  MdSortModule,
  MdTabsModule,
  MdToolbarModule,
  MdTooltipModule,
  OverlayContainer,
  StyleModule
} from '@angular/material';
import { AppComponent }  from './app.component';
import {UserFormComponent} from '../user-form/user-form.component';
import { UserDetailComponent } from '../user-detail/user-detail.component';
import { UserAddressComponent } from '../user-address/user-address.component';
import { UserContactComponent } from '../user-contact/user-contact.component';
import { UserIdComponent } from '../user-id/user-id.component';
import { UserAgreementComponent } from '../user-agreement/user-agreement.component';
import { UserDataComponent } from '../user-data/user-data.component';


const appRoutes:Routes = [
  
    {path:'form1',component:UserFormComponent},
    {path: '',redirectTo:'form1',pathMatch:'full'},
    {path:'detail',component:UserDetailComponent},
    {path:'address',component:UserAddressComponent},
    {path:'contact',component:UserContactComponent},
    {path:'agreement',component:UserAgreementComponent},
    {path:'id',component:UserIdComponent},   
  
  ];


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MdAutocompleteModule,
    MdButtonModule,
    MdButtonToggleModule,
    MdCardModule,
    MdCheckboxModule,
    MdChipsModule,
    MdTableModule,
    MdDatepickerModule,
    MdDialogModule,
    MdExpansionModule,
    MdGridListModule,
    MdIconModule,
    MdInputModule,
    MdListModule,
    MdMenuModule,
    MdCoreModule,
    MdPaginatorModule,
    MdProgressBarModule,
    MdProgressSpinnerModule,
    MdRadioModule,
    MdRippleModule,
    MdSelectModule,
    MdSidenavModule,
    MdSlideToggleModule,
    MdSliderModule,
    MdSnackBarModule,
    MdSortModule,
    MdTabsModule,
    MdToolbarModule,
    MdTooltipModule,
    MdNativeDateModule,
    RouterModule.forRoot(appRoutes),
  ],
  declarations: [
    AppComponent,
    UserFormComponent,
    UserDetailComponent,
    UserAddressComponent,
    UserContactComponent,
    UserIdComponent,
    UserAgreementComponent,
    UserDataComponent
  ],
  bootstrap: [ AppComponent ]
})


export class AppModule { }
