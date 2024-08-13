import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { sprintdb } from '../../../shared/service/sprintdb';
import { MessageService, TreeNode } from 'primeng/api';

@Component({
  selector: 'app-project-sprint',
  templateUrl: './project-sprint.component.html',
  styleUrl: './project-sprint.component.scss',
  providers: [sprintdb],
})
export class ProjectSprintComponent {
  files!: any[];

  cols!: any[];
  constructor(private sprintdb: sprintdb,   private messageService: MessageService,
  ) {}

  ngOnInit() {
    this.sprintdb.getFilesystem().then((files) => (this.files = files));
  }
  isOnCreateSprint: boolean = false;
  checked: boolean = false;

  thisShow: boolean = false;

  sprintItem!: any;

 
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
