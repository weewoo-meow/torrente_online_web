import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-dowloads-dedicated',
  imports: [MatButtonModule, MatDividerModule, MatIconModule],
  templateUrl: './dowloads-dedicated.component.html',
  styleUrl: './dowloads-dedicated.component.scss'
})
export class DowloadsDedicatedComponent {
  download_dedicated() {
    const link = document.createElement('a');
    link.href = '/tol_dedicated_server.rar'; // Asegúrate de que el .bat esté en 'src/assets'
    link.download = 'tol_dedicated_server.rar';
    link.click();

  }
}
