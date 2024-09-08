import { Component } from '@angular/core';
import { listMember } from '../../../shared/data/member';

@Component({
  selector: 'app-project-member',
  templateUrl: './project-member.component.html',
  styleUrl: './project-member.component.scss'
})
export class ProjectMemberComponent {

  listMember: any = listMember;
}
