import { Component, output } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'project-resource-list',
  templateUrl: './project-resource-list.component.html',
  styleUrl: './project-resource-list.component.scss',
})
export class ProjectResourceList {
  listResource: any[] = [];

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
