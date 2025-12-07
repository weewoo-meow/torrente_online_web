import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { arr_party_list_mockup } from './party-list.mockup';
import { Observable, of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class PartyListService {

  constructor(private http: HttpClient) { }
  get_party_list():Observable<any>{
    return this.http.get('http://127.0.0.1:3000/party_list')
  }
}
