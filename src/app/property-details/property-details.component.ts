import {Component, OnInit} from '@angular/core';
import {Property} from "../model/property";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-property-details',
  templateUrl: './property-details.component.html',
  styleUrls: ['./property-details.component.css']
})
export class PropertyDetailsComponent implements OnInit {
  private id: string;
  property: Property;

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.property = this.route.snapshot.data.property;
  }

}

