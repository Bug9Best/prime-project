import { Component, ViewChild } from '@angular/core';
import { ProjectResourceList } from './project-resource-list/project-resource-list.component';
import { ProjectResourceCreate } from './project-resource-create/project-resource-create.component';

@Component({
  selector: 'app-project-resource',
  templateUrl: './project-resource.component.html',
  styleUrl: './project-resource.component.scss',
})
export class ProjectResourceComponent {
  isAddResource: boolean = false;

  @ViewChild(ProjectResourceList)
  projectResourceList!: ProjectResourceList;
  addResource(data: any) {
    this.projectResourceList.addResource(data);
  }

  @ViewChild(ProjectResourceCreate)
  projectResourceCreate!: ProjectResourceCreate;
  editResource(data: any) {
    this.projectResourceCreate.editResource(data);
  }
}
