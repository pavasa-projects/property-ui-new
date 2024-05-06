import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, FormArray, Validators} from '@angular/forms';
import {FormComponent} from "../../common/form/form.component";
import {Store} from "@ngrx/store";
import {AppState} from "../../state/app.state";
import {Router} from "@angular/router";
import {PS_CONSTANTS} from "../../common/constants/psconstants";
import {faArrowLeft, faMinus, faMinusCircle, faPlusCircle} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-post-property-unit-configuration',
  templateUrl: './post-property-unit-configuration.component.html',
  styleUrls: ['./post-property-unit-configuration.component.css']
})
export class PostPropertyUnitConfigurationComponent extends FormComponent implements OnInit {


  constructor(private fb: FormBuilder, store: Store<AppState>, private router: Router) {
    super(store);
  }

  override initFormFields(): void {
    this.form = this.fb.group({
      inputsArray: this.fb.array([
        this.createInputGroup()
      ])
    });
  }

  get inputsArray() {
    return this.form.get('inputsArray') as FormArray;
  }

  createInputGroup(): FormGroup {
    return this.fb.group({
      unitType: [''],
      carpetArea1: [''],
      carpetArea2: [''],
      price1: [''],
      price2: [''],
      floorPlan: [''],
    });
  }

  addFields() {
    this.inputsArray.push(this.createInputGroup());
  }

  removeFields(index: number) {
    this.inputsArray.removeAt(index);
  }

  onSubmit() {
    if (this.form.valid) {
      console.log('Form submitted:', this.form.value);
    }
  }

  navigateNextPageOnSuccess(): void {

    //after submitting all values will be available using this
    console.log('Form submitted:', this.form.value);

   this.router.navigateByUrl('/post-property-more-details');
  }

  ngOnDestroy(): void {
  }

  protected readonly PS_CONSTANTS = PS_CONSTANTS;
  protected readonly faMinus = faMinus;
  protected readonly faPlusCircle = faPlusCircle;
  protected readonly faArrowLeft = faArrowLeft;
  protected readonly faMinusCircle = faMinusCircle;
}



