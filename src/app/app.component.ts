import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  download() {
    window.open('/torrenteonline.exe');
  }

  getImgBoxStyle(img: string) {
    return { 'background-image': 'url(' + img + ')' };
  }
}
