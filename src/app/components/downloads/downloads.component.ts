import { Component } from '@angular/core';
import { MatButton, MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-downloads',
  imports: [MatButtonModule, MatDividerModule, MatIconModule],
  templateUrl: './downloads.component.html',
  styleUrl: './downloads.component.scss'
})
export class DownloadsComponent {
  download() {
    const link = document.createElement('a');
    link.href = '/torrenteonline.exe'; // Asegúrate de que el .bat esté en 'src/assets'
    link.download = 'torrenteonline.exe';
    link.click();

  }
}
