import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { ConvertParams } from '../classes/ConvertParams';

@Injectable({
  providedIn: 'root'
})
export class AppApiService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };

  API_URL  =  'http://localhost:5000';

  constructor(private  httpClient:  HttpClient) { }

  getFileExtentionsCount(folder) {
    return this.httpClient.get(`${this.API_URL}/foldercontent/${encodeURIComponent(folder)}`);
  }

  postConvert(convertParams: ConvertParams) {
    return this.httpClient.post<ConvertParams>(`${this.API_URL}/convert`, convertParams, this.httpOptions);
  }

}
