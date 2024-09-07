import { Component } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';

@Component({
  selector: 'app-project-member',
  templateUrl: './project-member.component.html',
  styleUrl: './project-member.component.scss'
})
export class ProjectMemberComponent {

  isAddMember: boolean = false;
  isAddPosition: boolean = false;
  isShowMember: boolean = false;

  memberItem!: any;

  listMember: any = [
    { name: 'John Doe', position: 'Project Manager' },
    { name: 'Jane Doe', position: 'Developer' },
    { name: 'John Smith', position: 'Tester' },
    { name: 'Jane Smith', position: 'Designer' },
    { name: 'Jane Smith', position: 'Designer' },
    { name: 'Jane Smith', position: 'Designer' },
    { name: 'Jane Smith', position: 'Designer' },
    { name: 'Jane Smith', position: 'Designer' },
    { name: 'Jane Smith', position: 'Designer' },
    { name: 'Jane Smith', position: 'Designer' },
    { name: 'Jane Smith', position: 'Designer' },
    { name: 'Jane Smith', position: 'Designer' },
    { name: 'Jane Smith', position: 'Designer' },
    { name: 'Jane Smith', position: 'Designer' },
    { name: 'Jane Smith', position: 'Designer' },
    { name: 'Jane Smith', position: 'Designer' },
    { name: 'Jane Smith', position: 'Designer' },
    { name: 'Jane Smith', position: 'Designer' },
    { name: 'Jane Smith', position: 'Designer' },
    { name: 'Jane Smith', position: 'Designer' },
    { name: 'Jane Smith', position: 'Designer' },
    { name: 'Jane Smith', position: 'Designer' },
    { name: 'Jane Smith', position: 'Designer' },
    { name: 'Jane Smith', position: 'Designer' },
    { name: 'Jane Smith', position: 'Designer' },
    { name: 'Jane Smith', position: 'Designer' },
    { name: 'Jane Smith', position: 'Designer' },
    { name: 'Jane Smith', position: 'Designer' },
    { name: 'Jane Smith', position: 'Designer' },
    { name: 'Jane Smith', position: 'Designer' },
    { name: 'Jane Smith', position: 'Designer' },
    { name: 'Jane Smith', position: 'Designer' },
    { name: 'Jane Smith', position: 'Designer' },
    { name: 'Jane Smith', position: 'Designer' },
    { name: 'Jane Smith', position: 'Designer' },
    { name: 'Jane Smith', position: 'Designer' },
    { name: 'Jane Smith', position: 'Designer' },
  ]
  positions: any = [
    { label: 'Project Manager', value: 'Project Manager' },
    { label: 'Developer', value: 'Developer' },
    { label: 'Designer', value: 'Designer' },
    { label: 'Tester', value: 'Tester' },
  ];

  constructor(
    private messageService: MessageService,
    private ConfirmationService: ConfirmationService,
  ) { }

  showMessage(severity: string, summary: string, detail: string) {
    this.messageService.add({
      key: 'app',
      severity: severity,
      summary: summary,
      detail: detail
    });
  }

  removeMember() {
    this.ConfirmationService.confirm({
      message: 'Do you want to remove this member?',
      header: 'Remove Member',
      icon: 'pi pi-info-circle',
      accept: () => {
        this.showMessage('success', 'Removed', 'Member has been removed');
      },
      reject: () => {
        this.showMessage('warn', 'Rejected', 'You have rejected');
      }
    });
  }

}
