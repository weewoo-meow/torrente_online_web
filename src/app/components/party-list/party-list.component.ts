import { Component } from '@angular/core';
import { PartyListService } from './party-list.service';
import { Observable, of } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-party-list',
  imports: [CommonModule],
  templateUrl: './party-list.component.html',
  styleUrl: './party-list.component.scss'
})
export class PartyListComponent {
  partyList$: Observable<any>
  constructor(private partyListService: PartyListService){
    this.partyList$ = this.partyListService.get_party_list()
  }
}
