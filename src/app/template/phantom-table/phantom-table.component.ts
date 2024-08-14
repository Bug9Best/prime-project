import { Component, ContentChildren, Directive, Input, input, output, TemplateRef } from '@angular/core';
import { TableModule } from 'primeng/table';
import { ContextMenuModule } from 'primeng/contextmenu';
import { CommonModule } from '@angular/common';
import { ThaiModule } from '../../shared/pipes/thai.module';

export type PhantomTableColumnType = "string" | "number" | "date" | "button" | "checked" | "control" | "citizen" | 'html';
export class PhantomTableColumn {
  label: string = "Column";
  field: string = "default";
  type: PhantomTableColumnType = "string";
  style?: any = { minWidth: '200px' };
  styleClass?: string = "";
  colSpan?: number = 0;
  numberFormat?: string = "0.0-0";
  dateFormat?: string = "date";
  emptyText?: string = "-";
}

@Directive({
  selector: '[pTableField]'
})
export class PhantomTableFieldDirective {

  @Input('pTableField')
  name: string = "default";

  constructor(public templateRef: TemplateRef<any>) { }
  public getName(): string {
    return this.name;
  }
}

export type PhantomTableFieldTemplate = {
  [name: string]: TemplateRef<any>;
};

@Component({
  selector: 'phantom-table',
  standalone: true,
  imports: [
    CommonModule,
    TableModule,
    ContextMenuModule,
    ThaiModule
  ],
  templateUrl: './phantom-table.component.html',
  styleUrl: './phantom-table.component.scss'
})
export class PhantomTableComponent {

  _selectedItems: any;

  @Input() value: any = [];
  @Input() columns: any = [];
  @Input() showOrder: boolean = true;
  showOrderIndex: number = 0;

  items = [
    { label: 'View', icon: 'pi pi-fw pi-search', command: () => this.viewIssue(this.selectedItems) },
  ];

  paginator = input<boolean>(true);
  totalRecords = input<number>(10);
  rowsPerPageOptions = input<number[]>([5, 10, 20, 50]);
  scrollable = input<boolean>(true);
  scrollHeight = input<string>('551px');
  resizableColumns = input<boolean>(true);
  dataKey = input<string>('id');
  selectionMode = input<string>('multiple');
  metaKeySelection = input<string>('');
  styleClass = input<string>('p-datatable-gridlines');


  public get selectedItems(): any {
    return this._selectedItems;
  }

  onSelectedItems = output<any>();
  public set selectedItems(value: any) {
    this._selectedItems = value;
    this.onSelectedItems.emit(value);
  }

  get selection(): boolean {
    return this.selectionMode() !== "";
  }

  @ContentChildren(PhantomTableFieldDirective)
  templates: PhantomTableFieldDirective[] = [];
  template: PhantomTableFieldTemplate = {};

  ngAfterContentInit(): void {
    this.templates.forEach(t => {
      this.template[t.getName()] = t.templateRef;
      console.log(t.getName());
    })
  }

  viewIssue(selectedItems: any) {
    console.log(selectedItems);
  }
}
