import {Component, OnInit} from '@angular/core';
import {AppState} from "../../state/app.state";
import {Store} from "@ngrx/store";
import {Router} from "@angular/router";
import {PropertyStateActions} from "../../state/property/actions";

@Component({
  selector: 'app-post-property-pricing-plan',
  templateUrl: './post-property-pricing-plan.component.html',
  styleUrls: ['./post-property-pricing-plan.component.css']
})
export class PostPropertyPricingPlanComponent implements OnInit {

  constructor(private store: Store<AppState>, private router: Router) {
  }

  ngOnInit(): void {
  }

  onSave(): void {
    this.store.dispatch(PropertyStateActions.clearCurrentProperty());
    this.router.navigateByUrl('/thank-you');
  }

}

