import { Routes } from '@angular/router';
import { MatchmakerComponent } from './components/matchmaker/matchmaker.component';
import { CommunityComponent } from './components/community/community.component';

export const routes: Routes = [
  { path: 'matchmaker', component: MatchmakerComponent },
  { path: 'community', component: CommunityComponent },
];
