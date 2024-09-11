import { Component, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NodeService } from '../../../shared/service/nodeservice';
import { PhantomTableColumn } from '../../../template/phantom-table/phantom-table.component';


@Component({
  selector: 'project-issue',
  templateUrl: './project-issue.component.html',
  styleUrl: './project-issue.component.scss',
  providers: [NodeService],
})
export class ProjectIssueComponent {

  
}
