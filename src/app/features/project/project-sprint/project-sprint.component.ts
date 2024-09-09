import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MessageService, TreeNode } from 'primeng/api';
import { SprintData } from '../../../shared/service/sprintdb';
import { PhantomTableForlistColumn } from '../../../template/phantom-table-for-list/phantom-table-for-list.component';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-project-sprint',
  templateUrl: './project-sprint.component.html',
  styleUrl: './project-sprint.component.scss',
})
export class ProjectSprintComponent {
  files!: any[];

  cols!: any[];

  data: any[] = SprintData;

  constructor(private messageService: MessageService) {}

  isOnCreateSprint: boolean = false;
  checked: boolean = false;

  thisShow: boolean = false;

  sprintItem!: any;

  value: any[] = [
    { id: '000000', sprintname: 'Task Tesk', sprintowner: 'Task Tesk', sprintdate: 1627729997, progressbar: 10,},
    { id: '000001', sprintname: 'Task 1', sprintowner: 'Task Tesk', sprintdate: 1617361997, progressbar: 20,},
    { id: '000002', sprintname: 'Task 2', sprintowner: 'Task Tesk', sprintdate: 1610536397,  progressbar: 30,},
    { id: '000003', sprintname: 'Task 3 ', sprintowner: 'Task Tesk', sprintdate: 1628507597,  progressbar: 40,},
    { id: '000004', sprintname: 'Task 4', sprintowner: 'Task Tesk', sprintdate: 1624705997, progressbar: 75 },
    { id: '000005', sprintname: 'Task 5', sprintowner: 'Task Tesk', sprintdate: 1628075597,  progressbar: 50 },
    { id: '000006', sprintname: 'Task 6', sprintowner: 'Task Tesk', sprintdate: 1641121997,  progressbar: 50 },
    { id: '000007', sprintname: 'Task 7', sprintowner: 'Task Tesk', sprintdate: 1639393997,  progressbar: 50 },
    { id: '000008', sprintname: 'Task 8', sprintowner: 'Task Tesk',sprintdate: 1639393997, progressbar: 50 },
    { id: '000009', sprintname: 'Task 9', sprintowner: 'Task Tesk', sprintdate: 1639307597,  progressbar: 50 },
    { id: '0000010', sprintname: 'Task 10', sprintowner: 'Task Tesk', sprintdate: 1609067597,  progressbar: 50 },
    { id: '0000011', sprintname: 'Task 11', sprintowner: 'Task Tesk', sprintdate: 1611918797,  progressbar: 50 },
    { id: '0000012', sprintname: 'Task 12', sprintowner: 'Task Tesk', sprintdate: 1627816397,  progressbar: 50 },
    { id: '0000013', sprintname: 'Task 13', sprintowner: 'Task Tesk', sprintdate: 1625051597,  progressbar: 50 },
    { id: '0000014', sprintname: 'Task 14', sprintowner: 'Task Tesk', sprintdate: 1627920000,  progressbar: 50 },
    { id: '0000015', sprintname: 'Task 15', sprintowner: 'Task Tesk', sprintdate: 1633259597,  progressbar: 50 },
    { id: '0000016', sprintname: 'Task 16', sprintowner: 'Task Tesk', sprintdate: 1624965197,  progressbar: 50 },
    { id: '0000017', sprintname: 'Task 17', sprintowner: 'Task Tesk', sprintdate: 1641035597,  progressbar: 50 },
    { id: '0000018', sprintname: 'Task 18', sprintowner: 'Task Tesk', sprintdate: 1637061197,  progressbar: 50 },
    { id: '0000019', sprintname: 'Task 19', sprintowner: 'Task Tesk', sprintdate: 1637925197,  progressbar: 50 },
    { id: '0000020', sprintname: 'Task 20', sprintowner: 'Task Tesk', sprintdate: 1628334797,  progressbar: 50 },
    { id: '0000021', sprintname: 'Task 21', sprintowner: 'Task Tesk', sprintdate: 1622891597,  progressbar: 50 },
    { id: '0000022', sprintname: 'Task 22', sprintowner: 'Task Tesk', sprintdate: 1616238797,  progressbar: 50 },
    { id: '0000023', sprintname: 'Task 23', sprintowner: 'Task Tesk', sprintdate: 1626693197,  progressbar: 50 },
    { id: '0000024', sprintname: 'Task 24', sprintowner: 'Task Tesk', sprintdate: 1626174797,  progressbar: 50 },
    { id: '0000025', sprintname: 'Task 25', sprintowner: 'Task Tesk', sprintdate: 1631013197,  progressbar: 50 },
    { id: '0000026', sprintname: 'Task 26', sprintowner: 'Task Tesk', sprintdate: 1635937997,  progressbar: 50 },
    { id: '0000027', sprintname: 'Task 27', sprintowner: 'Task Tesk', sprintdate: 1637665997,  progressbar: 50 },
    { id: '0000028', sprintname: 'Task 28', sprintowner: 'Task Tesk', sprintdate: 1611400397,  progressbar: 50 },
    { id: '0000029', sprintname: 'Task 29', sprintowner: 'Task Tesk', sprintdate: 1618053197,  progressbar: 50 }
  ];

  columns: PhantomTableForlistColumn[] = [
    {
      type: "string",
      label: "Task/Issue",
      field: "sprintname",
      style: {
        width: "30%",
      }
    },
    {
      type: "string",
      label: "Sprint Owner",
      field: "sprintowner",
      style: {
        width: "25%",
      }
    },
    {
      type: "date",
      label: "Sprint Start Date",
      field: "sprintdate",
      style: {
        width: "20%",
      }
    },
    {
      type: "progress",
      label: "Progress",
      field: "progressbar",
      style: {
        width: "25%",
      }
    }
  ]


  formGroup: FormGroup = new FormGroup({
    sprint_name: new FormControl('', Validators.required),
    start_date: new FormControl(new Date(), Validators.required),
    end_date: new FormControl('', Validators.required),
  });
  getTotalDate(start_date: any, end_date: any) {
    let start = new Date(start_date);
    let end = new Date(end_date);
    let diff = Math.abs(start.getTime() - end.getTime());
    let diffDays = Math.ceil(diff / (1000 * 3600 * 24));
    return diffDays + ' days';
  }
  onclick() {
    this.thisShow = !this.thisShow;
  }

  resetForm() {
    this.formGroup.reset();
    this.isOnCreateSprint = false;
  }

  showMessages(severity: string, summary: string, detail: string) {
    this.messageService.add({
      severity: severity,
      summary: summary,
      detail: detail,
    });
  }

  onCreateSprint() {
    if (this.formGroup.invalid) {
      this.formGroup.markAllAsTouched();
      this.showMessages('error', 'Error', 'Please fill in the form');
      return;
    }
    this.files.push({
      id: this.files.length + 1,
      sprint_name: this.formGroup.get('sprint_name')?.value,
      sprint_owner: 'Natthaphon Ditthaviboon',
      start_date: this.formGroup.get('start_date')?.value,
      end_date: this.formGroup.get('end_date')?.value,
      progress: 0,
    });
    this.resetForm();
  }
}
