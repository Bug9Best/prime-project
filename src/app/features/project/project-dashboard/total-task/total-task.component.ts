import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';

@Component({
  selector: 'app-total-task',
  standalone: true,
  imports: [ButtonModule, TableModule],
  templateUrl: './total-task.component.html',
  styleUrl: './total-task.component.scss'
})
export class TotalTaskComponent {
  memberItem!: any;
  value: any = [
    {
      id: 1,
      name: 'Test',
      roles: "Test ",
    },
    {
      id: 2,
      name: 'Test2',
      roles: "Test2",
    },
  ];
}
