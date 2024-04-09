import {Component, ViewChild} from '@angular/core';
import {NgxGpAutocompleteDirective} from "@angular-magic/ngx-gp-autocomplete";

@Component({
  selector: 'app-autocomplete-location',
  templateUrl: './autocomplete-location.component.html',
  styleUrls: ['./autocomplete-location.component.css']
})
export class AutocompleteLocationComponent {
  @ViewChild('placesRef') placesRef: NgxGpAutocompleteDirective;
  // @Output() setAddress: EventEmitter<Address> = new EventEmitter<Address>();

  constructor() {
  }

  options = {
    types: [],
    componentRestrictions: {country: 'IN'}
  };

  public handleAddressChange(place: google.maps.places.PlaceResult): void {
    // TODO - uncomment below
    // this.setAddress.emit(address);
  }


}
