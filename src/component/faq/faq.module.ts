import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FaqRoutingModule } from './faq-routing.module';
import { FaqComponent } from './faq.component';
import { CardModule } from 'primeng/card';


@NgModule({
  declarations: [
    FaqComponent
  ],
    imports: [
        CommonModule,
        FaqRoutingModule,
        CardModule
    ]
})
export class FaqModule { }
