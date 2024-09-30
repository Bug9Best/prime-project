import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';
import { UploadEvent } from 'primeng/fileupload';

@Component({
  selector: 'app-project-setting',
  templateUrl: './project-setting.component.html',
  styleUrl: './project-setting.component.scss',
})
export class ProjectSettingComponent {
  member: any[] = [];

  ngOnInit() {
    this.member = [{ name: 'Phuri siripool' }, { name: 'Natthapong D. Best' }];
  }

  constructor(private messageService: MessageService) {}
  title: string = 'Project Test';
  description: string = 'Description Test';

  TitleisEditing: boolean = false;
  DescriptionisEditing: boolean = false;

  toggleTitleEdit() {
    this.TitleisEditing = !this.TitleisEditing;
  }

  toggleDescriptionEdit() {
    this.DescriptionisEditing = !this.DescriptionisEditing;
  }
  
  onBasicUploadAuto(event: UploadEvent) {
    this.messageService.add({
      severity: 'info',
      summary: 'Success',
      detail: 'File Uploaded with Auto Mode',
    });
  }
}
