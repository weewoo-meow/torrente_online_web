import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-matchmaker',
  imports: [MatButtonModule, MatDividerModule, MatIconModule],
  templateUrl: './matchmaker.component.html',
  styleUrl: './matchmaker.component.scss',
})
export class MatchmakerComponent {
  downloadBatch() {
    window.open('/torrenteParche.bat');
  }
}
