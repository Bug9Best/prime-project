import { Component, ContentChildren, Directive, Input, input, output, TemplateRef } from '@angular/core';
import { TableModule } from 'primeng/table';
import { ContextMenuModule } from 'primeng/contextmenu';
import { CommonModule } from '@angular/common';
import { ThaiModule } from '../../shared/pipes/thai.module';

export type PhantomTableForlistColumnType = "string" | "number" | "date" | "button" | "checked" | "control" | "citizen" | 'html' | 'image' | 'link' | 'tag' | 'process' | 'currency'| 'progress';
export class PhantomTableForListComponent {

}
export class PhantomTableForlistColumn {
  label: string = "Column";
  field: string = "default";
  type: PhantomTableForlistColumnType = "string";
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
export class PhantomTableForlistFieldDirective {

  @Input('pTableField')
  name: string = "default";

  constructor(public templateRef: TemplateRef<any>) { }
  public getName(): string {
    return this.name;
  }
}

export type PhantomTableForlistFieldTemplate = {
  [name: string]: TemplateRef<any>;
};
@Component({
  selector: 'phantom-table-for-list',
  templateUrl: './phantom-table-for-list.component.html',
  styleUrl: './phantom-table-for-list.component.scss'
})
export class PhantomTableForlist {

  _selectedItems: any;
  template: PhantomTableForlistFieldTemplate = {};

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

