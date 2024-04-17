import { NgModule } from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {StoreModule} from "@ngrx/store";
import {propertyReducer} from "../state/property/property.reducer";
import {RouterModule} from "@angular/router";
import { PostPropertyDetailsComponent } from './post-property-details/post-property-details.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { PostPropertyFurnishingComponent } from './post-property-furnishing/post-property-furnishing.component';
import { PostPropertyLocationComponent } from './post-property-location/post-property-location.component';
import { PostPropertyMoreDetailsComponent } from './post-property-more-details/post-property-more-details.component';
import { PostPropertyPhotosComponent } from './post-property-photos/post-property-photos.component';
import { PostPropertyPricingPlanComponent } from './post-property-pricing-plan/post-property-pricing-plan.component';
import { PostPropertyRentComponent } from './post-property-rent/post-property-rent.component';
import { ThankYouComponent } from './thank-you/thank-you.component';
import {NgbInputDatepicker, NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {NgxGpAutocompleteModule} from "@angular-magic/ngx-gp-autocomplete";
import {YouTubePlayerModule} from "@angular/youtube-player";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {SelectableIconComponent} from "../common/selectable-icon/selectable-icon.component";



@NgModule({
  declarations: [PostPropertyDetailsComponent, PostPropertyFurnishingComponent, PostPropertyLocationComponent, PostPropertyMoreDetailsComponent, PostPropertyPhotosComponent, PostPropertyPricingPlanComponent, PostPropertyRentComponent, ThankYouComponent, SelectableIconComponent],
  imports: [
    CommonModule,
    StoreModule.forFeature('property', propertyReducer),
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
    NgbInputDatepicker,
    NgxGpAutocompleteModule,
    NgbModule,
    YouTubePlayerModule,
    NgOptimizedImage,
    FontAwesomeModule
  ]
})
export class PostPropertyModule { }
