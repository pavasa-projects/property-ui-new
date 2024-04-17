import {Component, ElementRef, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormControl, Validators} from "@angular/forms";
import {AppState} from "../../state/app.state";
import {DataService} from "../../service/data.service";
import {Store} from "@ngrx/store";
import {Router} from "@angular/router";
import {NgbDatepickerConfig, NgbDateStruct} from "@ng-bootstrap/ng-bootstrap";
import {FormComponent} from "../../common/form/form.component";
import {faPersonWalking, faSwimmingPool} from "@fortawesome/free-solid-svg-icons";
import {IconProp} from "@fortawesome/fontawesome-svg-core";

@Component({
  selector: 'app-post-property-more-details',
  templateUrl: './post-property-more-details.component.html',
  styleUrls: ['./post-property-more-details.component.css']
})
export class PostPropertyMoreDetailsComponent extends FormComponent implements OnInit {
  dateModel: NgbDateStruct;
  selectedIcons: string[] = [];



  constructor(private fb: FormBuilder, private router: Router,
              private config: NgbDatepickerConfig, store: Store<AppState>,
               el: ElementRef,  dataService: DataService) {
    super(store, dataService);
    const current = new Date();
    config.minDate = {
      year: current.getFullYear(), month:
        current.getMonth() + 1, day: current.getDate()
    };
    config.outsideDays = 'hidden';
  }

  override initFormFields(): void {
    this.form = this.fb.group({
    });
  }

  navigateNextPageOnSuccess(): void {
    this.router.navigateByUrl('/post-property-photos');
  }


  onIconSelected(selectedIcon: string) {
    console.log("selecte --- "+ selectedIcon)
    const index = this.selectedIcons.findIndex(icon => icon ==selectedIcon);
    console.log(index);
    // console.log("before --"+ this.selectedIcons);
    if (index === -1) {
      // @ts-ignore
      this.selectedIcons.push(selectedIcon);
    } else {
      this.selectedIcons.splice(index, 1);
    }
    console.log(this.selectedIcons);
  }



  validateSelection() {
    if (this.selectedIcons.length > 0) {
      this.form.controls['icons'].setErrors(null);
    } else {
      this.form.controls['icons'].setErrors({ 'required': true });
    }
  }
}
