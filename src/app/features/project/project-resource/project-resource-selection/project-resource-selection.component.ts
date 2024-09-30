import { Component, inject, output } from '@angular/core';
import { MessageService } from 'primeng/api';
import { ResourceType } from '../../../../shared/options/resource-type';

@Component({
  selector: 'project-resource-selection',
  templateUrl: './project-resource-selection.component.html',
  styleUrl: './project-resource-selection.component.scss',
})
export class ProjectResourceSelectionComponent {
  
  selectedType: number = 0;
  visible: boolean = false;
  listType: any[] = ResourceType;

  onCloseDialog(visible: boolean) {
    this.visible = visible;
    this.resetSelection();
  }

  resetSelection() {
    this.selectedType = 0;
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

  onSelectTypeEvent = output<any>();
  validateState() {
    if (!this.selectedType) return;
    this.onSelectTypeEvent.emit(this.selectedType);
    this.onCloseDialog(false);
  }
}
