export var ConfigMenu = [
    {
        label: 'TITLE_PLANNING',
        icon: 'pi-chevron-down',
        expanded: true,
        items: [
            { label: 'MENU_DASHBOARD', icon: 'pi-th-large', routerLink: '/project/dashboard' },
            { label: 'MENU_GANTT', icon: 'pi-calendar-clock', routerLink: '/project/gantt' },
            { label: 'MENU_SPRINT', icon: 'pi-spinner', routerLink: '/project/sprint' },
            { label: 'MENU_BACKLOG', icon: 'pi-align-left', routerLink: '/project/backlog' },
            { label: 'MENU_LIST', icon: 'pi-list-check', routerLink: '/project/issue' },
            { label: 'MENU_BOARD', icon: 'pi-clipboard', routerLink: '/project/board' },
            { label: 'MENU_DOCUMENT', icon: 'pi-file', routerLink: '/project/resource' },
        ]
    },
    {
        label: 'TITLE_CONFIG',
        icon: 'pi-chevron-down',
        expanded: true,
        items: [
            { label: 'MENU_PROJECT_MEMBER', icon: 'pi-users', routerLink: '/project/member' },
            // { label: 'MENU_PROJECT_SETTING', icon: 'pi-cog', routerLink: ['/project-setting'] },
        ]
    },
]