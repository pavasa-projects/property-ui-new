import {Component, ElementRef, ViewChild} from '@angular/core';
import {FormComponent} from "../../common/form/form.component";
import {FormBuilder, Validators} from "@angular/forms";
import {Store} from "@ngrx/store";
import {AppState} from "../../state/app.state";
import {Router} from "@angular/router";
import {Property} from "../../model/property";
import {NgxGpAutocompleteDirective} from "@angular-magic/ngx-gp-autocomplete";
import PlaceResult = google.maps.places.PlaceResult;

@Component({
  selector: 'app-post-property-location',
  templateUrl: './post-property-location.component.html',
  styleUrls: ['./post-property-location.component.css']
})
export class PostPropertyLocationComponent extends FormComponent {
  lat = 0;
  lng: number;
  formattedAddress: string | undefined;

  @ViewChild('placesRef') placesRef: NgxGpAutocompleteDirective;
  options = {
    types: [],
    componentRestrictions: {country: 'IN'}
  };

  constructor(private fb: FormBuilder, store: Store<AppState>, private router: Router,  el: ElementRef) {
    super(store);
  }

  override initFormFields(): void {
    this.form = this.fb.group({
      propertyLocation: ['', [Validators.required]],
      societyName: ['', [Validators.required]]
    });
  }

  navigateNextPageOnSuccess(): void {
    this.router.navigateByUrl('/post-property-unit-configuration');
  }

  manualAddress(): void {
    this.form.controls.propertyLocation.setValue('');
    this.lat = 0;
    this.lng = 0;
  }

  override setCustomPropertyInStore(property: Property): void {
    property.lat = this.lat;
    property.lng = this.lng;
  }

  public handleAddressChange(address: PlaceResult): void {
    let societyName: string | undefined = '';
    let formattedAddress = address.formatted_address;
    // @ts-ignore
    if (address.name !== address.address_components[0].long_name) {
      societyName = address.name;
      formattedAddress = societyName + ', ' + address.formatted_address;
    }
    this.formattedAddress = formattedAddress;
    // @ts-ignore
    this.form.get('propertyLocation').setValue(formattedAddress);
    // @ts-ignore
    this.form.get('societyName').setValue(societyName);
    this.form.markAsDirty();
    // @ts-ignore
    this.lat = address.geometry.location.lat();
    // @ts-ignore
    this.lng = address.geometry.location.lng();
    console.log('Society name ' + address.name); // if this and address 1 is same name then ask user to enter society name manually
    // @ts-ignore
    console.log('address 1 ' + address.address_components[0].long_name);
    console.log('formatted address ' + address.formatted_address);
    // @ts-ignore
    console.log('Latitude' + address.geometry.location.lat());
    // @ts-ignore
    console.log('Longitude ' + address.geometry.location.lng());
  }

}
