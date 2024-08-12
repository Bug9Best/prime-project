import { CommonModule } from '@angular/common';
import { Component, ElementRef, inject } from '@angular/core';
import { NavigationEnd, Router, RouterModule, RouterOutlet } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { ConfigMenu } from '../../../config/menu';
import { PhantomPageService } from '../phantom-page.service';

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

  item: any;
  active = false;

  visible: boolean = true;
  activeRoute: string = '';
  menu: any[] = ConfigMenu;

  model: any[] = [
    // {
    //   label: 'TITLE_PLANNING',
    //   icon: 'pi-chevron-down',
    //   expanded: true,
    //   items: [
    //     { label: 'MENU_DASHBOARD', icon: 'pi-th-large', routerLink: ['/dashboard'] },
    //     { label: 'MENU_GANTT', icon: 'pi-calendar-clock', routerLink: ['/gantt-chart'] },
    //     { label: 'MENU_WORK_BREAK_DOWN', icon: 'pi-sitemap', routerLink: ['/work-break-down'] },
    //     { label: 'MENU_SPRINT', icon: 'pi-spinner', routerLink: ['/sprint'] },
    //     { label: 'MENU_BACKLOG', icon: 'pi-align-left', routerLink: ['/backlog'] },
    //     { label: 'MENU_LIST', icon: 'pi-list-check', routerLink: ['/list'] },
    //     { label: 'MENU_BOARD', icon: 'pi-clipboard', routerLink: ['/board'] },
    //     { label: 'MENU_DOCUMENT', icon: 'pi-file', routerLink: ['/project-document'] },
    //   ]
    // },
    // {
    //   label: 'TITLE_CONFIG',
    //   icon: 'pi-chevron-down',
    //   expanded: true,
    //   items: [
    //     { label: 'MENU_PROJECT_MEMBER', icon: 'pi-users', routerLink: ['/project-member'] },
    //     // { label: 'MENU_PROJECT_SETTING', icon: 'pi-cog', routerLink: ['/project-setting'] },
    //   ]
    // },

    {
      label: 'Home',
      items: [
        { label: 'Dashboard', icon: 'pi pi-fw pi-home', routerLink: ['/'] }
      ]
    },
    {
      label: 'UI Components',
      items: [
        { label: 'Form Layout', icon: 'pi pi-fw pi-id-card', routerLink: ['/uikit/formlayout'] },
        { label: 'Input', icon: 'pi pi-fw pi-check-square', routerLink: ['/uikit/input'] },
        { label: 'Float Label', icon: 'pi pi-fw pi-bookmark', routerLink: ['/uikit/floatlabel'] },
        { label: 'Invalid State', icon: 'pi pi-fw pi-exclamation-circle', routerLink: ['/uikit/invalidstate'] },
        { label: 'Button', icon: 'pi pi-fw pi-box', routerLink: ['/uikit/button'] },
        { label: 'Table', icon: 'pi pi-fw pi-table', routerLink: ['/uikit/table'] },
        { label: 'List', icon: 'pi pi-fw pi-list', routerLink: ['/uikit/list'] },
        { label: 'Tree', icon: 'pi pi-fw pi-share-alt', routerLink: ['/uikit/tree'] },
        { label: 'Panel', icon: 'pi pi-fw pi-tablet', routerLink: ['/uikit/panel'] },
        { label: 'Overlay', icon: 'pi pi-fw pi-clone', routerLink: ['/uikit/overlay'] },
        { label: 'Media', icon: 'pi pi-fw pi-image', routerLink: ['/uikit/media'] },
        { label: 'Menu', icon: 'pi pi-fw pi-bars', routerLink: ['/uikit/menu'], routerLinkActiveOptions: { paths: 'subset', queryParams: 'ignored', matrixParams: 'ignored', fragment: 'ignored' } },
        { label: 'Message', icon: 'pi pi-fw pi-comment', routerLink: ['/uikit/message'] },
        { label: 'File', icon: 'pi pi-fw pi-file', routerLink: ['/uikit/file'] },
        { label: 'Chart', icon: 'pi pi-fw pi-chart-bar', routerLink: ['/uikit/charts'] },
        { label: 'Misc', icon: 'pi pi-fw pi-circle', routerLink: ['/uikit/misc'] }
      ]
    },
    {
      label: 'Prime Blocks',
      items: [
        { label: 'Free Blocks', icon: 'pi pi-fw pi-eye', routerLink: ['/blocks'], badge: 'NEW' },
        { label: 'All Blocks', icon: 'pi pi-fw pi-globe', url: ['https://www.primefaces.org/primeblocks-ng'], target: '_blank' },
      ]
    },
    {
      label: 'Utilities',
      items: [
        { label: 'PrimeIcons', icon: 'pi pi-fw pi-prime', routerLink: ['/utilities/icons'] },
        { label: 'PrimeFlex', icon: 'pi pi-fw pi-desktop', url: ['https://www.primefaces.org/primeflex/'], target: '_blank' },
      ]
    },
    {
      label: 'Pages',
      icon: 'pi pi-fw pi-briefcase',
      items: [
        {
          label: 'Landing',
          icon: 'pi pi-fw pi-globe',
          routerLink: ['/landing']
        },
        {
          label: 'Auth',
          icon: 'pi pi-fw pi-user',
          items: [
            {
              label: 'Login',
              icon: 'pi pi-fw pi-sign-in',
              routerLink: ['/auth/login']
            },
            {
              label: 'Error',
              icon: 'pi pi-fw pi-times-circle',
              routerLink: ['/auth/error']
            },
            {
              label: 'Access Denied',
              icon: 'pi pi-fw pi-lock',
              routerLink: ['/auth/access']
            }
          ]
        },
        {
          label: 'Crud',
          icon: 'pi pi-fw pi-pencil',
          routerLink: ['/pages/crud']
        },
        {
          label: 'Timeline',
          icon: 'pi pi-fw pi-calendar',
          routerLink: ['/pages/timeline']
        },
        {
          label: 'Not Found',
          icon: 'pi pi-fw pi-exclamation-circle',
          routerLink: ['/notfound']
        },
        {
          label: 'Empty',
          icon: 'pi pi-fw pi-circle-off',
          routerLink: ['/pages/empty']
        },
      ]
    },
    {
      label: 'Hierarchy',
      items: [
        {
          label: 'Submenu 1', icon: 'pi pi-fw pi-bookmark',
          items: [
            {
              label: 'Submenu 1.1', icon: 'pi pi-fw pi-bookmark',
              items: [
                { label: 'Submenu 1.1.1', icon: 'pi pi-fw pi-bookmark' },
                { label: 'Submenu 1.1.2', icon: 'pi pi-fw pi-bookmark' },
                { label: 'Submenu 1.1.3', icon: 'pi pi-fw pi-bookmark' },
              ]
            },
            {
              label: 'Submenu 1.2', icon: 'pi pi-fw pi-bookmark',
              items: [
                { label: 'Submenu 1.2.1', icon: 'pi pi-fw pi-bookmark' }
              ]
            },
          ]
        },
        {
          label: 'Submenu 2', icon: 'pi pi-fw pi-bookmark',
          items: [
            {
              label: 'Submenu 2.1', icon: 'pi pi-fw pi-bookmark',
              items: [
                { label: 'Submenu 2.1.1', icon: 'pi pi-fw pi-bookmark' },
                { label: 'Submenu 2.1.2', icon: 'pi pi-fw pi-bookmark' },
              ]
            },
            {
              label: 'Submenu 2.2', icon: 'pi pi-fw pi-bookmark',
              items: [
                { label: 'Submenu 2.2.1', icon: 'pi pi-fw pi-bookmark' },
              ]
            },
          ]
        }
      ]
    },
    {
      label: 'Get Started',
      items: [
        {
          label: 'Documentation', icon: 'pi pi-fw pi-question', routerLink: ['/documentation']
        }
      ]
    }
  ];

  constructor(
    private router: Router,
    public layoutService: PhantomPageService,
    public el: ElementRef
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

  itemClick(event: Event) {
    // avoid processing disabled items
    if (this.item.disabled) {
      event.preventDefault();
      return;
    }

    // execute command
    if (this.item.command) {
      this.item.command({ originalEvent: event, item: this.item });
    }

    // toggle active state
    if (this.item.items) {
      this.active = !this.active;
    }
  }
}
