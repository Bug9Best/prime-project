import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'phantom-dialog',
  templateUrl: './phantom-dialog.component.html',
  styleUrl: './phantom-dialog.component.scss'
})
export class PhantomDialog {

  @Input()
  data: any;

  @Input()
  visible: boolean = false;

  @Input()
  showButton: boolean = true;

  @Input()
  icon: string = "";

  @Input()
  buttonStyle: any = {};

  @Input()
  buttonStyleClass: string = "p-button-sm";

  @Input()
  label: string = "BUTTON";

  @Input()
  modal: boolean = true;

  @Input()
  appendTo: string = 'body';

  @Input()
  draggable: boolean = false;

  @Input()
  dismissableMask: boolean = true;

  @Input()
  dialogWidth: string = "auto";

  @Input()
  dialogHeight: string = "auto";

  @Input()
  dialogstyle: any = { minWidth: '50vw' };

  @Input()
  showEdit: boolean = false;

  @Input()
  showTrash: boolean = false;

  @Input()
  showClose: boolean = true;

  @Input()
  showBack: boolean = false;

  @Input()
  header?: string;

  @Input()
  subHeader?: string;

  @Input()
  showHeader: boolean = true;

  @Input()
  showSubHeader: boolean = false;

  @Input()
  headerStyleClass: string = "p-0";

  @Input()
  contentStyleClass: string = "p-4";

  @Output()
  visibleChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  @Output()
  onCloseClick: EventEmitter<void> = new EventEmitter();

  @Output()
  onEditClick: EventEmitter<any> = new EventEmitter();

  @Output()
  onTrashClick: EventEmitter<any> = new EventEmitter();

  @Output()
  onBackClick: EventEmitter<any> = new EventEmitter();

  onShow(): void {
    this.visible = true;
    this.visibleChange.emit(this.visible);
  }

  onClose(): void {
    this.visible = false;
    this.visibleChange.emit(this.visible);
    this.onCloseClick.emit();
  }

  show(): void {
    this.onShow();
  }
}
