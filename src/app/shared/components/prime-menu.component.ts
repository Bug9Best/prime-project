import { CommonModule } from '@angular/common';
import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { Menu, MenuModule } from 'primeng/menu';

@Component({
  selector: 'prime-menu',
  standalone: true,
  imports: [
    CommonModule,
    MenuModule,
    ButtonModule
  ],
  template: `
    @if (showButton) {
      <p-button 
        [icon]="icon"
        [label]="label"
        [class]="styleClass"
        (onClick)="menu.toggle($event)" 
      />
    }
    <p-menu #menu [model]="items" [popup]="true" appendTo="body"/>
  `
})
export class PrimeMenu {

  @Input()
  showButton: boolean = false;

  @Input()
  items: MenuItem[] = [
    { label: 'Angular' },
    { label: 'React' },
    { label: 'Vue' }
  ];

  @Input()
  icon: string = 'pi pi-bars';

  @Input()
  label: string = 'default';

  @Input()
  styleClass: string = '';

  @ViewChild('menu', { static: false }) menu!: Menu;

  toggleMenu(event: Event) {
    console.log(event);
    this.menu.toggle(event);
  }
}
