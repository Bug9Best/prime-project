import { Component, inject, Input, output, ViewChild } from '@angular/core';
import { PhantomPageService } from '../phantom-page.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { ButtonModule } from 'primeng/button';
import { Overlay } from 'primeng/overlay';
import { GanttConfig, GanttConfigProvider } from '../../../config/gantt.config';
import { enUS, th } from 'date-fns/locale';

@Component({
  selector: 'phantom-topbar',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    TranslateModule,
    OverlayPanelModule,
    ButtonModule,
  ],
  templateUrl: './phantom-topbar.component.html',
  providers: [GanttConfig, GanttConfigProvider],
})
export class PhantomTopbarComponent {

  @Input()
  isShowToggleSidebar: boolean = true;
  stateToogleSidebar: boolean = false;

  constructor(
    private ganntConfig: GanttConfig,
    public phantomPageService: PhantomPageService
  ) {}

  @ViewChild('op', { static: false }) overlay!: Overlay;
  translateService = inject(TranslateService);
  changeLanguage(lang: string) {
    this.translateService.use(lang);
    this.overlay.hide();
    this.SetGanttConfig(lang);
  }
  onToggleSidebarEvent = output<boolean>();
  toggleSidebar(state: boolean) {
    this.stateToogleSidebar = !state;
    this.onToggleSidebarEvent.emit(state);
  }

  SetGanttConfig(lang: string) {
    switch (lang) {
      case 'en':
        this.ganntConfig.dateOptions = {
          locale: enUS,
        };
        this.ganntConfig.dateFormat = {
          hour: 'HH:mm',
          day: 'd',
          week: `'week' w 'of' yyyy`,
          month: 'LLLL',
          year: `'year' yyyy`,
          yearMonth: `LLLL yyyy' (week' w ')'`,
          yearQuarter: `QQQQ 'of' yyyy`,
        };
        break;
      case 'th':
        this.ganntConfig.dateOptions = {
          locale: th,
        };
        this.ganntConfig.dateFormat = {
          hour: 'HH:mm',
          day: 'd',
          week: `'สัปดาห์' w 'ของ' yyyy`,
          month: 'LLLL',
          year: `'year' yyyy`,
          yearMonth: `LLLL yyyy' (สัปดาห์' w ')'`,
          yearQuarter: `QQQQ 'ของ' yyyy`,
        };
        break;
    }
  }
}
