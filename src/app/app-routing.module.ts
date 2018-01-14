import {NgModule} from '@angular/core';
import {RouterModule,Routes} from '@angular/router';
import  {EmployementComponent} from './employement/employement.component';
import {DepartmentComponent} from './department/department.component';
import {DepartmentDetailsComponent} from './department-details/department-details.component';
import {AppComponent} from './app.component';


 const routes:Routes=[
	{
     path:'department',component:DepartmentComponent
	},
	{
     path:'employement',component:EmployementComponent
	},
	{path:'department-details/:id',component:DepartmentDetailsComponent}
    
	];

@NgModule({
  imports:[
   RouterModule.forRoot(routes)
  ],
  exports:[
  RouterModule
  ]
  	
 
  

})

export class AppRoutingModule{}



export const appListComponent=[EmployementComponent,DepartmentComponent,DepartmentDetailsComponent];