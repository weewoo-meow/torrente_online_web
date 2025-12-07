import { Routes } from '@angular/router';
import { MatchmakerComponent } from './components/matchmaker/matchmaker.component';
import { CommunityComponent } from './components/community/community.component';
import { DownloadsComponent } from './components/downloads/downloads.component';
import { DowloadsDedicatedComponent } from './components/dowloads-dedicated/dowloads-dedicated.component';

export const routes: Routes = [
  { path: 'downloads', component: DownloadsComponent },
  { path: 'downloads_dedicated', component: DowloadsDedicatedComponent },
  { path: 'matchmaker', component: MatchmakerComponent },
  { path: 'community', component: CommunityComponent },
];
