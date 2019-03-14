import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { TranslateModule } from '@ngx-translate/core';

import { MaterialsModule } from '../materials.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MaterialsModule,
    FlexLayoutModule,
    TranslateModule
  ],
  exports: [
    CommonModule,
    MaterialsModule,
    FlexLayoutModule,
    TranslateModule
  ]
})
export class SharedModule { }
