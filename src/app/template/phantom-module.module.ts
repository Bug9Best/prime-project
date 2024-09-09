import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhantomContainer } from './phantom-container/phantom-container.component';
import { PhantomDialog } from './phantom-dialog/phantom-dialog.component';
import { PrimeNGModule } from '../shared/modules/primeng.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PhantomForm } from './phantom-form/phantom-form.component';
import { PhantomHeader } from './phantom-header/phantom-header.component';
import { TranslateModule } from '@ngx-translate/core';
import { PhantomTable } from './phantom-table/phantom-table.component';
import { ThaiModule } from '../shared/pipes/thai.module';
import { PhantomContent } from './phantom-content/phantom-content.component';
import { PhantomTableForlist } from './phantom-table-for-list/phantom-table-for-list.component';

@NgModule({
  declarations: [
    PhantomContainer,
    PhantomDialog,
    PhantomForm,
    PhantomHeader,
    PhantomTable,
    PhantomContent,
    PhantomTableForlist
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    PrimeNGModule,
    ThaiModule,
    TranslateModule,
  ],
  exports: [
    PhantomContainer,
    PhantomDialog,
    PhantomForm,
    PhantomHeader,
    PhantomTable,
    PhantomContent,
    PhantomTableForlist
  ],
})
export class PhantomModule {}
