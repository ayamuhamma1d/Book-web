import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
Observable
@Injectable({
  providedIn: 'root'
})
export class BooksService {
  constructor(private _httpClient: HttpClient) { }
getTrending():Observable<any>{
 return this._httpClient.get('http://openlibrary.org/subjects/love.json?published_in=1500-1600')

}

}
