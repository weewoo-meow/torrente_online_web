import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-matchmaker',
  imports: [MatButtonModule, MatDividerModule, MatIconModule],
  templateUrl: './matchmaker.component.html',
  styleUrl: './matchmaker.component.scss',
})
export class MatchmakerComponent {
  downloadBatch() {
    const link = document.createElement('a');
    link.href = '/torrenteparche.bat'; // Asegúrate de que el .bat esté en 'src/assets'
    link.download = 'torrenteparche.bat';
    link.click();
  }
}
