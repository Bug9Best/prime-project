import { Component } from '@angular/core';
import { PhantomTemplateModule } from '../../../../template/phantom-template.module';
import { CommonModule } from '@angular/common';
import { PrimeNGModule } from '../../../../shared/modules/primeng.module';
import { ThaiModule } from '../../../../shared/pipes/thai.module';

@Component({
  selector: 'project-issue-detail',
  standalone: true,
  imports: [
    CommonModule,
    PrimeNGModule,
    PhantomTemplateModule,
    ThaiModule,
  ],
  templateUrl: './project-issue-detail.component.html',
  styleUrl: './project-issue-detail.component.scss'
})
export class ProjectIssueDetail {

  visible: boolean = false;

  value: string | null = null;
  commentValue: string = '';

  startDate: Date = new Date();
  dueDate: Date = new Date();

  listComment: any[] = [
    {
      value: 'ตรวจดูความถูกต้องอีกรอบ',
      date: new Date(new Date().setDate(new Date().getDate() - 1))
    },
    {
      value: 'ตรวจดูความถูกต้องอีกรอบ',
      date: new Date(new Date().setDate(new Date().getDate() - 1))
    },
    {
      value: 'ตรวจดูความถูกต้องอีกรอบ',
      date: new Date(new Date().setDate(new Date().getDate() - 1))
    },
    {
      value: 'ตรวจดูความถูกต้องอีกรอบ',
      date: new Date(new Date().setDate(new Date().getDate() - 1))
    },
    {
      value: 'ตรวจดูความถูกต้องอีกรอบ',
      date: new Date(new Date().setDate(new Date().getDate() - 1))
    },
  ];

  isEditAssignee: boolean = false;
  isEditStartDate: boolean = false;
  isEditDueDate: boolean = false;
  isEditEstimate: boolean = false;
  isEditActual: boolean = false;

  showDialog(data: any) {
    this.visible = true;
  }

  openDetail(data: any) {
    this.visible = true;
    console.log(data);
  }

  addComment() {
    this.listComment.push({
      value: this.commentValue,
      date: new Date()
    });
    this.commentValue = '';
    console.log(this.listComment);
  }

}

