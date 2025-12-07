import { Component } from '@angular/core';
import { PartyListService } from './party-list.service';
import { map, Observable, of } from 'rxjs';
import { CommonModule } from '@angular/common';
    import { transformServers } from './party-list.helper';
@Component({
  selector: 'app-party-list',
  imports: [CommonModule],
  templateUrl: './party-list.component.html',
  styleUrl: './party-list.component.scss'
})
export class PartyListComponent {
  partyList$: Observable<any>
  constructor(private partyListService: PartyListService){
    this.partyList$ = this.partyListService.get_party_list().pipe(map(res=> {
      res.arr_length = transformServers(res.arr_length)
      return res
    }))

  }
}
