import { Routes } from '@angular/router';
import { PhantomPage } from './template/phantom-page/phantom-page.component';
import { ProjectMemberComponent } from './features/project/project-member/project-member.component';
import { ProjectDashboardComponent } from './features/project/project-dashboard/project-dashboard.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        loadChildren: () => import('./features/home/home.module').then(m => m.HomeModule)
    },
    {
        path: 'create',
        loadChildren: () => import('./features/project/project-create/project-create.module').then(m => m.ProjectCreateModule)
    },
    {
        path: 'workspace',
        loadChildren: () => import('./features/project/project-selector/project-selector.module').then(m => m.ProjectSelectorModule)
    },
    {
        path: 'project/:id',
        component: PhantomPage,
        children: [
            {
                path: '',
                redirectTo: 'dashboard',
                pathMatch: 'prefix'
            },
            {
                
                path: 'dashboard',
                loadChildren: () => import('./features/project/project-dashboard/project-dashboard.module').then(m => m.ProjectDashboardModule)
            },
            {
                path: 'sprint',
                loadChildren: () => import('./features/project/project-sprint/project-sprint.module').then(m => m.ProjectSprintModule)
            },
            {
                path: 'backlog',
                loadChildren: () => import('./features/project/project-backlog/project-backlog.module').then(m => m.ProjectBacklogModule)
            },
            {
                path: 'task',
                loadChildren: () => import('./features/project/project-issue/project-issue.module').then(m => m.ProjectIssueModule)
            },
            {
                path: 'board',
                loadChildren: () => import('./features/project/project-board/project-board.module').then(m => m.ProjectBoardModule)
            },
            {
                path: 'gantt',
                loadChildren: () => import('./features/project/project-gantt/project-gantt.module').then(m => m.ProjectGanttModule)
            },
            {
                path: 'resource',
                loadChildren: () => import('./features/project/project-resource/project-resource.module').then(m => m.ProjectResourceModule)
            },
            {
                path: 'member',
                loadChildren: () => import('./features/project/project-member/project-member.module').then(m => m.ProjectMemberModule)
            },
            {
                path: 'setting',
                loadChildren: () => import('./features/project/project-setting/project-setting.module').then(m => m.ProjectSettingModule)
            },
        ]
    },
];
