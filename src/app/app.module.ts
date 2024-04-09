import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {AppComponent, FormatTimePipe} from './app.component';
import {RouterLink, RouterOutlet} from "@angular/router";
import { LoginComponent } from './login/login.component';
import { FormComponent } from './common/form/form.component';
import { FormWithoutStoreComponent } from './common/form-without-store/form-without-store.component';
import {HeadroomModule} from "@ctrl/ngx-headroom";
import {AppRoutingModule} from "./app-routing.module";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { PostPropertyComponent } from './post-property/post-property.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {StoreModule} from "@ngrx/store";
import {PostPropertyModule} from "./post-property/post-property.module";
import {HttpClientModule} from "@angular/common/http";
import {DataService} from "./service/data.service";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {NgxGpAutocompleteModule} from "@angular-magic/ngx-gp-autocomplete";
import { PropertySearchComponent } from './property-search/property-search.component';
import { SearchResultComponent } from './search-result/search-result.component';
import { AutocompleteLocationComponent } from './common/autocomplete-location/autocomplete-location.component';
import {NgMultiSelectDropDownModule} from "ng-multiselect-dropdown";
import {Loader} from "@googlemaps/js-api-loader";
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { MyAccountComponent } from './user-dashboard/my-account/my-account.component';
import { MyPropertiesComponent } from './user-dashboard/my-properties/my-properties.component';
import { PropertyDetailsComponent } from './property-details/property-details.component';
import { PropertyAboutComponent } from './property-details/property-about/property-about.component';
import { PropertyAmenitiesComponent } from './property-details/property-amenities/property-amenities.component';
import { PropertyLocationComponent } from './property-details/property-location/property-location.component';
import {YouTubePlayerModule} from "@angular/youtube-player";


@NgModule({
  declarations: [
    AppComponent,
    FormatTimePipe,
    LoginComponent,
    PostPropertyComponent,
    PropertySearchComponent,
    SearchResultComponent,
    AutocompleteLocationComponent,
    UserDashboardComponent,
    MyAccountComponent,
    MyPropertiesComponent,
    PropertyDetailsComponent,
    PropertyAboutComponent,
    PropertyAmenitiesComponent,
    PropertyLocationComponent
  ],
  imports: [
    BrowserModule,
    RouterLink,
    RouterOutlet,
    HeadroomModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    PostPropertyModule,
    StoreModule.forRoot({}),
    HttpClientModule,
    NgbModule,
    NgxGpAutocompleteModule,
    NgMultiSelectDropDownModule,
    YouTubePlayerModule

  ],
  providers: [
    {
      provide: Loader,
      useValue: new Loader({
        apiKey: 'AIzaSyAgxFG5p5bsAOnd9iB5Q-R-8OLarR2ZlAM',
        libraries: ['places']
      })
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
