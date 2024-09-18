import { Component } from '@angular/core';
import { listIssue } from '../../../../shared/data/issue';
import { PhantomTemplateModule } from '../../../../template/phantom-template.module';
import { CommonModule } from '@angular/common';
import { PrimeNGModule } from '../../../../shared/modules/primeng.module';
import { ConfirmationService } from 'primeng/api';

@Component({
  selector: 'project-issue-detail',
  standalone: true,
  imports: [
    CommonModule,
    PrimeNGModule,
    PhantomTemplateModule
  ],
  templateUrl: './project-issue-detail.component.html',
  styleUrl: './project-issue-detail.component.scss'
})
export class ProjectIssueDetail {

  issueData: any = listIssue;
  visible: boolean = false;
  events: any[];
  value!: string;


  showDialog(data: any) {
    this.visible = true;
    this.innitializeData(data);
  }

  innitializeData(data: any = {}) {
    this.issueData = data;
  }
  constructor(
    private confirmationService: ConfirmationService
  ) {
    this.events = [
      { status: 'Ordered', date: '15/10/2020 10:30', icon: 'pi pi-shopping-cart', color: '#9C27B0', image: 'game-controller.jpg' },
      { status: 'Processing', date: '15/10/2020 14:00', icon: 'pi pi-cog', color: '#673AB7' },
      { status: 'Shipped', date: '15/10/2020 16:15', icon: 'pi pi-shopping-cart', color: '#FF9800' },
      { status: 'Delivered', date: '16/10/2020 10:00', icon: 'pi pi-check', color: '#607D8B' }
    ];
  }

  onDelete() {
    this.confirmationService.confirm({
      message: 'Are you sure that you want to delete this issue?',
      accept: () => {
      }
    });
  }
}

