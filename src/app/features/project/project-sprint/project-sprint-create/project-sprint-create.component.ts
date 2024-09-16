import { Component, output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'project-sprint-create',
  templateUrl: './project-sprint-create.component.html',
  styleUrl: './project-sprint-create.component.scss',
})
export class ProjectSprintCreate {
  visible: boolean = false;

  formGroup: FormGroup = new FormGroup({
    sprint_name: new FormControl('', Validators.required),
    start_date: new FormControl(new Date(), Validators.required),
    end_date: new FormControl('', Validators.required),
    sprint_note: new FormControl('', Validators.required),

  });

  constructor(private messageService: MessageService) { }

  getTotalDate(start_date: any, end_date: any) {
    let start = new Date(start_date);
    let end = new Date(end_date);
    let diff = Math.abs(start.getTime() - end.getTime());
    let diffDays = Math.ceil(diff / (1000 * 3600 * 24));
    return diffDays + ' days';
  }

  resetForm() {
    this.formGroup.reset({
      start_date: new Date(),
      progress: 0,
    });
    this.visible = false;
  }

  showMessages(severity: string, summary: string, detail: string) {
    this.messageService.add({
      key: 'app',
      severity: severity,
      summary: summary,
      detail: detail,
    });
  }

  validatreForm() {
    if (this.formGroup.invalid) {
      this.formGroup.markAllAsTouched();
      this.showMessages('warn', 'Error', 'Please fill in the form');
      return;
    }
    this.onCreateSprint()
  }

  onCreateEvent = output<any>();
  onCreateSprint() {
    let values = this.formGroup.value;
    values.id = Math.floor(Math.random() * 1000);
    values.process = 1;
    values.duration = this.getTotalDate(values.start_date, values.end_date);
    values.sprint_owner = 'John Doe';

    this.onCreateEvent.emit(values);
    this.showMessages('success', 'Success', 'Sprint created successfully');
    this.resetForm();
  }
}
