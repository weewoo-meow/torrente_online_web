import { Component } from '@angular/core';
import { MatButtonModule, MatIconButton } from '@angular/material/button';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { CdkCopyToClipboard } from '@angular/cdk/clipboard';
import { MatDividerModule } from '@angular/material/divider';

@Component({
  selector: 'app-community',
  imports: [
    MatIcon,
    CdkCopyToClipboard,
    MatButtonModule,
    MatDividerModule,
    MatIconModule,
  ],
  templateUrl: './community.component.html',
  styleUrl: './community.component.scss',
})
export class CommunityComponent {
  discord = 'https://discord.gg/zgcXAAKNQc';
}
