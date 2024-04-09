import {Component, OnInit} from '@angular/core';
import {FormComponent} from "../common/form/form.component";
import {AppState} from "../state/app.state";
import {Store} from "@ngrx/store";
import {FormBuilder} from "@angular/forms";

@Component({
  selector: 'app-property-search',
  templateUrl: './property-search.component.html',
  styleUrls: ['./property-search.component.css']
})
export class PropertySearchComponent extends FormComponent implements OnInit {

  constructor(private fb: FormBuilder, store: Store<AppState>) {
    super(store);
  }

  override ngOnInit(): void {
    this.form = this.fb.group({
      typeOfProperty: 'Residential',
      bhkType: '',
      propertyTypes: ''
    });

  }

  onItemSelect(item: any): void {
    console.log(item);
  }

  onSelectAll(items: any): void {
    console.log(items);
  }

  navigateNextPageOnSuccess(): void {
  }
}
