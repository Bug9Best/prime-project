import { Component, output } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'project-resource-list',
  templateUrl: './project-resource-list.component.html',
  styleUrl: './project-resource-list.component.scss',
})
export class ProjectResourceList {
  selectedResource: any;
  listResource: any[] = [1, 2, 3];
  listContent: any[] = [
    {
      topic: 'Title 1',
      tag: ['Tag 1', 'Tag 2'],
      content: 'Content 1',
      resource_owner: 'Natthaphon Ditthaviboon',
      create_date: '2021-09-01',
    },
    {
      topic: 'Title 2',
      tag: ['Tag 3', 'Tag 4'],
      content: 'Content 2',
      resource_owner: 'Natthaphon Ditthaviboon',
      create_date: '2021-09-01',
    },
    {
      topic: 'Title 3',
      tag: ['Tag 5', 'Tag 6'],
      content: 'Content 3',
      resource_owner: 'Natthaphon Ditthaviboon',
      create_date: '2021-09-01',
    },
  ];
  listLink: any[] = [
    {
      topic: 'Item Link 1',
      tag: ['Tag 1', 'Tag 2'],
      content: 'Content 1',
      link: ['https://www.youtube.com/watch?v=cJxo2ayP0bo'],
      resource_owner: 'Natthaphon Ditthaviboon',
      create_date: '2021-09-01',
    },
    {
      topic: 'Item Link 2',
      tag: ['Tag 3', 'Tag 4'],
      content: 'Content 2',
      link: ['https://primeng.org/'],
      resource_owner: 'Natthaphon Ditthaviboon',
      create_date: '2021-09-01',
    },
    {
      topic: 'Title 3',
      tag: ['Tag 5', 'Tag 6'],
      content: 'Content 3',
      link: ['https://www.youtube.com/watch?v=6JYIGclVQdw'],
      resource_owner: 'Natthaphon Ditthaviboon',
      create_date: '2021-09-01',
    },
  ];
  listAttachment: any[] = [
    {
      topic: 'Item Attachments 1',
      tag: ['Tag 1', 'Tag 2'],
      content: 'Content 1',
      attachments: [
        {
          name: 'video_1337525056961017.mp4',
          url: 'https://storage.cloud.google.com/prime-project-1539.appspot.com/video_1337525056961017.mp4',
        },
      ],
      resource_owner: 'Natthaphon Ditthaviboon',
      create_date: '2021-09-01',
    },
    {
      topic: 'Item Attachments 2',
      tag: ['Tag 3', 'Tag 4'],
      content: 'Content 2',
      attachments: [
        {
          name: 'YBcapture00009.jpg',
          url: 'https://storage.cloud.google.com/prime-project-1539.appspot.com/YBcapture00009.jpg',
        },
      ],
      resource_owner: 'Natthaphon Ditthaviboon',
      create_date: '2021-09-01',
    },
    {
      topic: 'Item Attachments 3',
      tag: ['Tag 5', 'Tag 6'],
      content: 'Content 3',
      attachments: [
        {
          name: 'YBcapture00003.jpg',
          url: 'https://storage.cloud.google.com/prime-project-1539.appspot.com/YBcapture00003.jpg',
        },
      ],
      resource_owner: 'Natthaphon Ditthaviboon',
      create_date: '2021-09-01',
    },
  ];

  listMenu: MenuItem[] = [
    {
      label: 'Edit',
      icon: 'pi pi-pen-to-square',
      styleClass: 'text-sm text-red-500',
      command: (event) => {
        this.onEditResource(
          this.selectedResource,
          this.listResource.indexOf(this.selectedResource)
        );
      },
    },
    {
      separator: true,
    },
    {
      label: 'Delete',
      icon: 'pi pi-trash',
      styleClass: 'text-sm text-red-500',
      command: (event) => {
        this.listResource = this.listResource.filter(
          (val) => val !== this.selectedResource
        );
      },
    },
  ];

  constructor(private sanitizer: DomSanitizer) {}

  addResource(data: any) {
    this.listResource.push(data);
  }

  onEditResourceEvent = output<any>();
  onEditResource(data: any, index: number) {
    this.onEditResourceEvent.emit({ data, index });
  }

  checkPath(contentText: any): boolean {
    const parser: DOMParser = new DOMParser();
    const doc: Document = parser.parseFromString(contentText, 'text/html');
    const url: string | null = doc.querySelector('a')?.href || '';
    return url.includes('youtube.com');
  }

  getEmbedLink(contentText: any): string {
    const parser: DOMParser = new DOMParser();
    const doc: Document = parser.parseFromString(contentText, 'text/html');
    const url: string | null = doc.querySelector('a')?.href || '';

    let result = this.convertToEmbedUrl(url);
    result = this.sanitizer.bypassSecurityTrustResourceUrl(result);
    return result;
  }

  convertToEmbedUrl(url: string): any {
    const match = url.match(/v=([^&]+)/);
    if (match) {
      const videoId = match[1];
      return `https://www.youtube.com/embed/${videoId}`;
    }
    return '';
  }
}
