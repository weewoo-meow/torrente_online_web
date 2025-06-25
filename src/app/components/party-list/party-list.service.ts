import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { arr_party_list_mockup } from './party-list.mockup';
import { Observable, of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class PartyListService {

  constructor() { }
  get_party_list():Observable<any>{
    return of(arr_party_list_mockup)//this.http.get('http://127.0.0.1:3333/party_list')
  }
}
