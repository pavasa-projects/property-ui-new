import { Injectable } from '@angular/core';
import {HttpClient, HttpEvent, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs";
import {waitForAsync} from "@angular/core/testing";
import {Property} from "../model/property";

@Injectable({
  providedIn: 'root'
})
export class ImageUploadService {

  private baseUrl = 'http://localhost:8080';
  private imageUrls: string[];

  constructor(private http: HttpClient) {}

  upload(file: File): Observable<HttpEvent<any>> {
    const formData: FormData = new FormData();

    formData.append('file', file);

    const req = new HttpRequest('POST', `${this.baseUrl}/uploadFile`, formData, {
      reportProgress: true,
      responseType: 'json',
    });

    return this.http.request(req);
  }

  getFiles(): Observable<string[]> {
    // return this.http.get(`${this.baseUrl}/listFiles`);
    // url = this.baseUrl} + 'listFiles'
    return this.http.get<string[]>(this.baseUrl+'/listFiles');
  }
}
