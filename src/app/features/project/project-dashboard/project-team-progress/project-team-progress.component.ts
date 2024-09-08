import { Component } from '@angular/core';
import { MeterItem } from 'primeng/metergroup';

@Component({
  selector: 'project-team-progress',
  templateUrl: './project-team-progress.component.html',
  styleUrl: './project-team-progress.component.scss',
})
export class ProjectTeamProgress {
  value: MeterItem[] = [
    { label: 'Apps', color: '#34d399', value: 12, icon: 'pi pi-table' },
    { label: 'Messages', color: '#fbbf24', value: 8, icon: 'pi pi-inbox' },
    { label: 'Media', color: '#60a5fa', value: 24, icon: 'pi pi-image' },
    { label: 'System', color: '#c084fc', value: 10, icon: 'pi pi-cog' },
  ];
}
