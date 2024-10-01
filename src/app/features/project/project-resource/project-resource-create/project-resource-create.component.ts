import { Component, inject } from '@angular/core';
import { MessageService } from 'primeng/api';

export enum ResourceType {
  SelectType = 1,
  InputData = 2,
}

@Component({
  selector: 'project-resource-create',
  templateUrl: './project-resource-create.component.html',
  styleUrl: './project-resource-create.component.scss',
})
export class ProjectResourceCreate {
  currentStep: ResourceType = ResourceType.SelectType;
  typeValue!: number;
  visible: boolean = false;
  text = 'Create Resource';

  onCloseDialog(visible: boolean) {
    this.visible = visible;
    setTimeout(() => {
      this.currentStep = ResourceType.SelectType;
    }, 300);
  }

  onSelectType(data: any) {
    this.typeValue = data;
    this.currentStep = ResourceType.InputData;
  }

  prevStep(state: boolean) {
    if (!state) return;
    this.currentStep = ResourceType.SelectType;
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
