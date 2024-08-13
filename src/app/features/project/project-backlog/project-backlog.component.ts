import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { StateService } from '../../../shared/service/state.service';

@Component({
  selector: 'app-project-backlog',
  templateUrl: './project-backlog.component.html',
  styleUrl: './project-backlog.component.scss'
})
export class ProjectBacklogComponent {
  isCreateIssue: boolean = false;
  issueName: string = '';
  listSprint: any[] = []
  listIssue: any[] = []

  @ViewChild('inputIssue') inputIssue: ElementRef | undefined;
  @ViewChild('buttonIssue') buttonIssue: ElementRef | undefined;

  constructor(
    private stateService: StateService,
    private renderer: Renderer2
  ) {
    this.stateService.stateReload$
      .subscribe((res) => {
        this.getSprints();
        this.getIssues();
      });

    this.renderer.listen('window', 'click', (e: Event) => {
      if (this.buttonIssue?.nativeElement.contains(e.target)) {
        this.isCreateIssue = true;
        return;
      }

      if (e.target !== this.inputIssue?.nativeElement) {
        this.handleOutsideClick();
      }
    });
  }

  ngOnInit() {
    this.getSprints();
    this.getIssues();
  }

  getSprints() {
    this.listSprint = JSON.parse(localStorage.getItem('sprints') || '[]');
  }

  getIssues() {
    this.listIssue = JSON.parse(localStorage.getItem('issues') || '[]');
  }

  onCreateIssue() {
    this.isCreateIssue = true;
    setTimeout(() => {
      this.inputIssue?.nativeElement.focus();
    }, 0);
  }

  handleOutsideClick() {
    if (this.issueName.trim() === "") {
      this.isCreateIssue = false;
    } else {
      this.createIssue();
    }
  }

  createIssue() {
    this.listIssue.push({ issue_name: this.issueName });
    localStorage.setItem('issues', JSON.stringify(this.listIssue));
    this.issueName = '';
    this.isCreateIssue = false;
  }
  selectedProducts!: any;

  value: any = [
    {
      id: 1,
      type: 'bestJung',
      key: '1',
      summary: '2',
      status: 'ON',
      sprint: 'kiw',
      assignee: 'daw',
    },
    {
      id: 1,
      type: 'kiwkung',
      key: '1',
      summary: '2',
      status: 'ON',
      sprint: 'kiw',
      assignee: 'daw',
    },
    {
      id: 3,
      type: 'Gintama',
      key: '1',
      summary: '2',
      status: 'ON',
      sprint: 'kiw',
      assignee: 'daw',
    },
    {
      id: 4,
      type: 'Orge-magi',
      key: '1',
      summary: '2',
      status: 'ON',
      sprint: 'kiw',
      assignee: 'daw',
    },
  ];

  selectedIssue!: any;

  items: any = [
    {
      id: 1,
      type: 'dawdawdwa',
      key: '1',
      summary: '2',
      status: 'ON',
      sprint: 'kiw',
      assignee: 'daw',
    },
    {
      id: 2,
      type: 'kiwkung',
      key: '1',
      summary: '2',
      status: 'ON',
      sprint: 'kiw',
      assignee: 'daw',
    },
    {
      id: 3,
      type: 'Gintama',
      key: '1',
      summary: '2',
      status: 'ON',
      sprint: 'kiw',
      assignee: 'daw',
    },
    {
      id: 4,
      type: 'Orge-magi',
      key: '1',
      summary: '2',
      status: 'ON',
      sprint: 'kiw',
      assignee: 'daw',
    },
  ];
}
