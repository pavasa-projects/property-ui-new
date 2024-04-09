import {Component, OnInit} from '@angular/core';
import {Property} from "../../model/property";
import {ActivatedRoute} from "@angular/router";
// import {NgxGalleryImage, NgxGalleryOptions} from "ngx-gallery";

@Component({
  selector: 'app-property-about',
  templateUrl: './property-about.component.html',
  styleUrls: ['./property-about.component.css']
})
export class PropertyAboutComponent implements OnInit {

  // galleryOptions: NgxGalleryOptions[];
  // galleryImages: NgxGalleryImage[];

  property: Property;

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    // @ts-ignore
    this.property = this.route.parent.snapshot.data.property;

  }

}
