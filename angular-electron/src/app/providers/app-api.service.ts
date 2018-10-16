import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppApiService {

  API_URL  =  'http://localhost:5000';

  constructor(private  httpClient:  HttpClient) { }

  getContacts() {
    return this.httpClient.get(`${this.API_URL}/contacts`);
  }

  getFileExtentionsCount(folder) {
    return this.httpClient.get(`${this.API_URL}/foldercontent/${encodeURIComponent(folder)}`);
  }

}
