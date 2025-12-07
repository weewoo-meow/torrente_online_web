import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { NavigationEnd, Router, RouterLink } from '@angular/router';
import { filter, Subscription } from 'rxjs';
@Component({
  selector: 'app-headers',
  imports: [RouterLink],
  templateUrl: './headers.component.html',
  styleUrl: './headers.component.scss',
})
export class HeadersComponent {
  actual_path: string = '';
  private routerSubscription!: Subscription;
  constructor(private router: Router) {
    this.routerSubscription = this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event: any) => {
        this.actual_path = event.urlAfterRedirects;
        console.log('URL actual:', this.actual_path);
        // Aquí puedes hacer lo que quieras con la URL
      });
  }
  getImgBoxStyle(img: string) {
    return { 'background-image': 'url(' + img + ')' };
  }
}
