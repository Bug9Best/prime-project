export var ConfigMenu = [
    {
        label: 'TITLE_PLANNING',
        icon: 'pi-chevron-down',
        expanded: true,
        items: [
            { label: 'MENU_DASHBOARD', icon: 'pi-th-large', routerLink: ['/dashboard'] },
            { label: 'MENU_GANTT', icon: 'pi-calendar-clock', routerLink: ['/gantt-chart'] },
            { label: 'MENU_WORK_BREAK_DOWN', icon: 'pi-sitemap', routerLink: ['/work-break-down'] },
            { label: 'MENU_SPRINT', icon: 'pi-spinner', routerLink: ['/sprint'] },
            { label: 'MENU_BACKLOG', icon: 'pi-align-left', routerLink: ['/backlog'] },
            { label: 'MENU_LIST', icon: 'pi-list-check', routerLink: ['/list'] },
            { label: 'MENU_BOARD', icon: 'pi-clipboard', routerLink: ['/board'] },
            { label: 'MENU_DOCUMENT', icon: 'pi-file', routerLink: ['/project-document'] },
        ]
    },
    {
        label: 'TITLE_CONFIG',
        icon: 'pi-chevron-down',
        expanded: true,
        items: [
            { label: 'MENU_PROJECT_MEMBER', icon: 'pi-users', routerLink: ['/project-member'] },
            // { label: 'MENU_PROJECT_SETTING', icon: 'pi-cog', routerLink: ['/project-setting'] },
        ]
    },
]