import { GANTT_GLOBAL_CONFIG } from '@worktile/gantt';
import { enUS } from 'date-fns/locale';

export const GanttConfigProvider = {
  provide: GANTT_GLOBAL_CONFIG,
  useValue: {
    dateOptions: {
      locale: enUS
    },
    dateFormat: {
      yearQuarter: `QQQQ 'of' yyyy`,
      month: 'LLLL',
      yearMonth: `LLLL yyyy'(week' w ')'`
    },
  },
};
