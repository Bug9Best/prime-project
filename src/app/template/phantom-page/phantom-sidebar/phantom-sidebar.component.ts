import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NavigationEnd, Router, RouterModule, RouterOutlet } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { ConfigMenu } from '../../../config/menu';

@Component({
  selector: 'phantom-sidebar',
  standalone: true,
  imports: [
    CommonModule,
    TranslateModule,
    RouterOutlet,
    RouterModule,
  ],
  templateUrl: './phantom-sidebar.component.html',
})
export class PhantomSidebarComponent {

  activeRoute: string = '';
  menu: any[] = ConfigMenu;

  constructor(
    private router: Router,
  ) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.activeRoute = event.urlAfterRedirects;
      }
    });
  }

  toggleSection(section: any) {
    section.expanded = !section.expanded;
  }

  isActiveRoute(route: string): boolean {
    return this.activeRoute === route;
  }
}
