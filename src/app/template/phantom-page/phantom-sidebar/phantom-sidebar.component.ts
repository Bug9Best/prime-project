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

  title = 'Phantom Sidebar';
  subTitle = 'Project Management System';
  icon: string = 'pi pi-refresh';
  backgroundColor: string = '#ffffff';

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
        this.title = 'Scrum Project';
        this.menu = configMenu.getScrumMenu();
        break;
      case '2':
        this.title = 'Waterfall Project';
        this.menu = configMenu.getWaterfallMenu();
        break;
      case '3':
        this.title = 'KanBan Project';
        this.menu = configMenu.getKanbanMenu();
        break;
      default:
        break
    }
  }

  getIcon(): string {
    let icon = '';
    switch (this.projectId) {
      case '1':
        icon = 'pi-sync text-orange-600';
        break;
      case '2':
        icon = 'pi-align-left text-blue-600';
        break;
      case '3':
        icon = 'pi-clipboard text-green-600';
        break;
      default:
        break
    }
    return icon;
  }

  getBgColor(): string {
    let bgColor = '';
    switch (this.projectId) {
      case '1':
        bgColor = 'bg-orange-100';
        break;
      case '2':
        bgColor = 'bg-blue-100';
        break;
      case '3':
        bgColor = 'bg-green-100';
        break;
      default:
        break
    }
    return bgColor;
  }

  toggleSection(section: any) {
    section.expanded = !section.expanded;
  }

  isActiveRoute(route: string): boolean {
    return this.activeRoute === route;
  }
}
