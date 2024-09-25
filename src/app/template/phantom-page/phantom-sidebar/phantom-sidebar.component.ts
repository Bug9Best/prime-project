import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router, RouterModule, RouterOutlet } from '@angular/router';
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

  projectId: string = '';
  activeRoute: string = '';
  menu: any = [];

  constructor(
    private router: Router,
    private activateRoute: ActivatedRoute,
  ) {
    this.activateRoute.paramMap.subscribe(params => {
      if (params.get('id')) {
        this.projectId = params.get('id')!;
        this.setMenu(this.projectId);
      }
    });

    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.activeRoute = event.urlAfterRedirects;
      }
    });
  }

  setMenu(type: string) {
    let configMenu = new ConfigMenu(this.projectId);
    switch (type) {
      case '1':
        this.menu = configMenu.getScrumMenu();
        break;
      case '2':
        this.menu = configMenu.getWaterfallMenu();
        break;
      case '3':
        this.menu = configMenu.getKanbanMenu();
        break;
      default:
        break
    }
  }

  toggleSection(section: any) {
    section.expanded = !section.expanded;
  }

  isActiveRoute(route: string): boolean {
    return this.activeRoute === route;
  }
}
