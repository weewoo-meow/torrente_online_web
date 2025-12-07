import { Routes } from '@angular/router';
import { MatchmakerComponent } from './components/matchmaker/matchmaker.component';
import { CommunityComponent } from './components/community/community.component';
import { DownloadsComponent } from './components/downloads/downloads.component';
import { PartyListComponent } from './components/party-list/party-list.component';

export const routes: Routes = [
  { path: 'downloads', component: DownloadsComponent },
  { path: 'matchmaker', component: MatchmakerComponent },
  { path: 'community', component: CommunityComponent },
  { path: 'party_list', component: PartyListComponent }
];
