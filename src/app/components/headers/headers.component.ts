import { Component } from '@angular/core';
import { Location } from '@angular/common'
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-headers',
  imports: [RouterLink],
  templateUrl: './headers.component.html',
  styleUrl: './headers.component.scss'
})
export class HeadersComponent {
  actual_path: string
  constructor(private location: Location){
    this.actual_path = this.location.path()
  }
  getImgBoxStyle(img: string) {
    return { 'background-image': 'url(' + img + ')' };
  }
}
