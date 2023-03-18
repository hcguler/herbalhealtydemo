import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactRoutingModule } from './contact-routing.module';
import { ContactComponent } from './contact.component';
import { CardModule } from 'primeng/card';


@NgModule({
  declarations: [
    ContactComponent
  ],
    imports: [
        CommonModule,
        ContactRoutingModule,
        CardModule
    ]
})
export class ContactModule { }
