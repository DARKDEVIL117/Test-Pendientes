import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { ListStudentComponent } from '../modules/list-student/list-student.component';
import { ListAdminComponent } from '../modules/list-admin/list-admin.component';


const routes: Routes = [

  {
    path: '', component: DashboardComponent,
    children:[
      {
        path: 'listStudent',
        component: ListStudentComponent
      },
      {
        path: 'listAdmin',
        component: ListAdminComponent
      }
 

    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
