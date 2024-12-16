import { Component, ContentChildren, Directive, Input, output, TemplateRef, ViewChild } from '@angular/core';
import { SortEvent } from 'primeng/api';
import { Table } from 'primeng/table';
export type PhantomTableColumnType = "string" | "number" | "date" | "button" | "checked" | "control" | "citizen" | 'html' | 'image' | 'link' | 'tag' | 'process' | 'currency' | 'progress';

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
  selector: '[phantomTableField]'
})

export class PhantomTableFieldDirective {
  @Input('phantomTableField')
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
  templateUrl: './phantom-table.component.html',
  styleUrl: './phantom-table.component.scss'
})
export class PhantomTable {

  _selectedItems: any;
  _tempValue: any = [];

  @Input() value: any = [];
  @Input() columns: any = [];
  @Input() showOrder: boolean = true;
  @Input() showOrderIndex: number = 0;
  @Input() reOrder: boolean = false;
  @Input() paginator: boolean = true;
  @Input() totalRecords: number = 10;
  @Input() rowsPerPageOptions: number[] = [5, 10, 20, 50];
  @Input() scrollable: boolean = true;
  @Input() resizableColumns: boolean = true;
  @Input() metaKeySelection: string = '';
  @Input() scrollHeight: string = '551px';
  @Input() selectionMode: any = 'single';
  @Input() dataKey: string = 'id';
  @Input() selection: any = [];
  @Input() styleClass: string = 'p-datatable-gridlines';

  items = [
    { label: 'View', icon: 'pi pi-fw pi-search', command: () => this.viewIssue(this.selectedItems) },
  ];

  public get selectedItems(): any {
    return this._selectedItems;
  }

  public set selectedItems(value: any) {
    this._selectedItems = value;
  }

  onSelectedItems = output<any>();
  viewIssue(selectedItems: any) {
    this.onSelectedItems.emit(selectedItems);
  }

  @ContentChildren(PhantomTableFieldDirective)
  templates: PhantomTableFieldDirective[] = [];
  template: PhantomTableFieldTemplate = {};

  ngAfterContentInit(): void {
    this.templates.forEach(t => {
      this.template[t.getName()] = t.templateRef;
    })

    if (!this.value) return;
    this._tempValue = this.value;
  }

  onOpenDetailEvent = output<any>();
  onOpenDetail(item: any) {
    this.onOpenDetailEvent.emit(item);
  }
}