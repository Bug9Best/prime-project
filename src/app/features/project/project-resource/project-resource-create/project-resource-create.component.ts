import { Component, inject } from '@angular/core';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'project-resource-create',
  templateUrl: './project-resource-create.component.html',
  styleUrl: './project-resource-create.component.scss',
})
export class ProjectResourceCreate {
  typeValue!: number;
  visible: boolean = false;
  text = 'Create Resource';

  setType(data: any) {
    this.typeValue = data;
    this.visible = true;
  }

  onCloseDialog(visible: boolean) {
    this.visible = visible;
  }

  messageService = inject(MessageService);
  showMessage(severity: string, summary: string, detail: string) {
    this.messageService.add({
      key: 'app',
      severity: severity,
      summary: summary,
      detail: detail,
    });
  }

  onCreateResource(value: boolean) {
    if (!value) return;
    this.showMessage('success', 'Success', 'Resource created successfully');
    this.onCloseDialog(false);
  }
}
