import {Component, ElementRef, OnInit} from '@angular/core';
import {FormComponent} from "../../common/form/form.component";
import {FormBuilder} from "@angular/forms";
import {Store} from "@ngrx/store";
import {AppState} from "../../state/app.state";
import {Router} from "@angular/router";
import {Observable} from "rxjs";
import {ImageUploadService} from "../../service/image-upload.service";
import {HttpEventType, HttpResponse} from "@angular/common/http";

@Component({
  selector: 'app-post-property-photos',
  templateUrl: './post-property-photos.component.html',
  styleUrls: ['./post-property-photos.component.css']
})
export class PostPropertyPhotosComponent implements OnInit {
  apiLoaded = false;

  // for image upload
  selectedFiles?: FileList;
  currentFile?: File;
  progress = 0;
  message = '';
  preview = '';
  imageUrls?: string[];


  constructor(private fb: FormBuilder, store: Store<AppState>, private router: Router,
               el: ElementRef, private uploadService: ImageUploadService) {
    // super(store);
  }

  navigateNextPageOnSuccess(): void {
    this.router.navigateByUrl('/post-property-pricing-plan');
  }

  ngOnInit(): void {
    // this.imageUrls = this.uploadService.getFiles();

    this.uploadService.getFiles().subscribe(
      imageUrls => {
        this.imageUrls = imageUrls;
      }
      // error => this.errorMsg = error.error.errorMsg
    );

    if (!this.apiLoaded) {
      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      document.body.appendChild(tag);
      this.apiLoaded = true;
    }
  }
  
  upload(event: any): void {
    this.selectedFiles = event.target.files;
    this.progress = 0;

    if (this.selectedFiles) {
      const file: File | null = this.selectedFiles.item(0);

      if (file) {
        this.currentFile = file;

        this.uploadService.upload(this.currentFile).subscribe({
          next: (event: any) => {
            if (event.type === HttpEventType.UploadProgress) {
              this.progress = Math.round((100 * event.loaded) / event.total);
            } else if (event instanceof HttpResponse) {
              this.message = event.body.message;

              //TODO to display all image urls
              // this.imageUrls = this.uploadService.getFiles();
            }
          },
          error: (err: any) => {
            console.log(err);
            this.progress = 0;

            if (err.error && err.error.message) {
              this.message = err.error.message;
            } else {
              this.message = 'Could not upload the image!';
            }

            this.currentFile = undefined;
          },
        });
      }

      this.selectedFiles = undefined;
    }
  }

}

