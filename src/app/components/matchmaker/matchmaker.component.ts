import { Component } from '@angular/core';
import { MatButton } from '@angular/material/button';

@Component({
  selector: 'app-matchmaker',
  imports: [MatButton],
  templateUrl: './matchmaker.component.html',
  styleUrl: './matchmaker.component.scss',
})
export class MatchmakerComponent {
  downloadBatch() {
    window.open('/torrenteParche.bat');
  }
}
