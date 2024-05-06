import {Component, ElementRef, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {Store} from "@ngrx/store";
import {AppState} from "../../state/app.state";
import {Router} from "@angular/router";
import {FormComponent} from "../../common/form/form.component";


@Component({
  selector: 'app-post-property-details',
  templateUrl: './post-property-details.component.html',
  styleUrls: ['./post-property-details.component.css']
})
export class PostPropertyDetailsComponent extends FormComponent implements OnInit, OnDestroy {
  constructor(private fb: FormBuilder, store: Store<AppState>, private router: Router,
               el: ElementRef) {
    super(store);
  }

  override initFormFields(): void {
    this.form = this.fb.group({
      projectName: ['', [Validators.required]],
      subTypeOfProperty: ['', [Validators.required]],
      totalNoOfUnits: ['', [Validators.required]],
      totalNoOfTowers: ['', [Validators.required]],
      towerNumber: ['', [Validators.required]],
      totalFloors: ['', [Validators.required]],
      totalProjectArea: ['', [Validators.required]],
      possessionDateMonth: ['', Validators.required],
      possessionDateYear: ['', Validators.required],

    });

  }

  navigateNextPageOnSuccess(): void {
    this.router.navigateByUrl('/post-property-location');
  }

  ngOnDestroy(): void {
  }


}

