import {NgModule} from '@angular/core';
import {RouterModule,Routes} from '@angular/router';
import  {EmployementComponent} from './employement/employement.component';
import {DepartmentComponent} from './department/department.component';
import {DepartmentDetailsComponent} from './department-details/department-details.component';
import {AppComponent} from './app.component';
import {PageNotfoundComponent} from './page-notfound/page-notfound.component';


 const routes:Routes=[
 /*the empty path is the default page like index.html*/
   {path:'', component:AppComponent},
	{
     path:'department',component:DepartmentComponent
	},
	{
     path:'employement',component:EmployementComponent
	},
	{path:'department-details/:id',component:DepartmentDetailsComponent},
   /*if the url doesn't mush any of this paths[always be the last elem]*/
   {path:'**',component:PageNotfoundComponent}

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



export const appListComponent=[AppComponent,PageNotfoundComponent,EmployementComponent,DepartmentComponent,DepartmentDetailsComponent];