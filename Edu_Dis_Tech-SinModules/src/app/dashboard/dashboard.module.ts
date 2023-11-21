import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { CalendarModule } from 'primeng/calendar';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';
import { ToolbarModule } from 'primeng/toolbar';
import { ToastModule } from 'primeng/toast';
import { InputSwitchModule } from 'primeng/inputswitch';


import { PasswordModule } from 'primeng/password';
import { SelectButtonModule } from 'primeng/selectbutton';
import { SidebarModule } from 'primeng/sidebar';
import { CardModule } from 'primeng/card';
import { SwiperModule } from 'swiper/angular';
import { ListStudentComponent } from '../modules/list-student/list-student.component';
import { ListAdminComponent } from '../modules/list-admin/list-admin.component';
@NgModule({
  declarations: [
    ListStudentComponent,
    ListAdminComponent,

  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ButtonModule,
    DropdownModule,
    CalendarModule,
    InputTextModule,
    TableModule,
    DialogModule,
    ToolbarModule,
    ToastModule,
    PasswordModule,
    InputSwitchModule,
    SelectButtonModule,
    SidebarModule,
    CardModule,
    SwiperModule
    

  ]
})
export class DashboardModule { }
