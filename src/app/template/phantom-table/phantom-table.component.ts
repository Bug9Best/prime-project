import { Component, ContentChildren, Directive, Input, input, output, TemplateRef } from '@angular/core';
import { TableModule } from 'primeng/table';
import { ContextMenuModule } from 'primeng/contextmenu';
import { CommonModule } from '@angular/common';
import { ThaiModule } from '../../shared/pipes/thai.module';

export type PhantomTableColumnType = "string" | "number" | "date" | "button" | "checked" | "control" | "citizen" | 'html' | 'image' | 'link' | 'tag' | 'process' | 'currency';
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
  templateUrl: './phantom-table.component.html',
  styleUrl: './phantom-table.component.scss'
})
export class PhantomTable {

  _selectedItems: any;
  template: PhantomTableFieldTemplate = {};

  @Input() value: any = [];
  @Input() columns: any = [];
  @Input() showOrder: boolean = true;
  @Input() showOrderIndex: number = 0;
  @Input() paginator: boolean = true;
  @Input() totalRecords: number = 10;
  @Input() rowsPerPageOptions : number[] = [5, 10, 20, 50];
  @Input() scrollable: boolean = true;
  @Input() resizableColumns: boolean = true;
  @Input() metaKeySelection: string = '';
  @Input() scrollHeight: string = '551px';
  @Input() selectionMode: any = 'multiple';
  @Input() dataKey:string = 'id';
  @Input() selection: any = [];
  @Input() styleClass: string = 'p-datatable-gridlines';

  items = [
    { label: 'View', icon: 'pi pi-fw pi-search', command: () => this.viewIssue(this.selectedItems) },
  ];

  public get selectedItems(): any {
    return this._selectedItems;
  }

  onSelectedItems = output<any>();
  public set selectedItems(value: any) {
    this._selectedItems = value;
    this.onSelectedItems.emit(value);
  }

  viewIssue(selectedItems: any) {
    console.log(selectedItems);
  }
}
