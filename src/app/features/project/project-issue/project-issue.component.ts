import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TreeNode } from 'primeng/api';
import { NodeService } from '../../../shared/service/nodeservice';

@Component({
  selector: 'app-project-issue',
  templateUrl: './project-issue.component.html',
  styleUrl: './project-issue.component.scss',
  providers: [NodeService],
})
export class ProjectIssueComponent {
  files!: TreeNode[];

  selectionKeys = {};

  cols!: any[];
  constructor(private nodeService: NodeService) {}

  ngOnInit() {
    this.nodeService.getFilesystem().then((files) => (this.files = files));
  }
  isOnCreateIssue: boolean = false;

  checked: boolean = false;

  selectedProducts!: any;

  formGroup: FormGroup = new FormGroup({
    summary: new FormControl('', Validators.required),
    type: new FormControl('', Validators.required),
    sprint: new FormControl('', Validators.required),
    assignee: new FormControl('', Validators.required),
  });

  options: any = [
    { label: 'Sprint 1', value: 'Sprint 1' },
    { label: 'Sprint 2', value: 'Sprint 2' },
    { label: 'Sprint 3', value: 'Sprint 3' },
  ];

  optionsAssignee: any = [
    { label: 'Natthaphon Ditthaviboon', value: 'Natthaphon Ditthaviboon' },
  ];

  optionsType: any = [
    { label: 'Task', value: 'Task' },
    { label: 'Bug', value: 'Bug' },
  ];

  optionsStatus: any = [
    { label: 'Todo', value: 'Todo' },
    { label: 'Done', value: 'Done' },
    { label: 'In Progress', value: 'In Progress' },
  ];

  onCloseDialog() {
    this.formGroup.reset();
    this.isOnCreateIssue = false;
  }

  onCreateIssue() {
    this.onCloseDialog();
  }
}
