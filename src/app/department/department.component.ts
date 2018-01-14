import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute,Params}  from '@angular/router';

@Component({
  selector: 'app-department',
  template:`
     <h3>Department List</h3>
     <ul    *ngFor="let depart of department">
     <li (click)="onSelect(depart)" [class.selected]="checkHielight(depart)" >{{depart.name}}</li>
     </ul>
 
  `,
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnInit {
  public selectedId;
  constructor(private _route:Router,private _router:ActivatedRoute) { }

  ngOnInit() {
  	 this._router.params.subscribe((param:Params)=>{
    	let id= parseInt(param['id']);
    	this.selectedId=id;

    })
  }

  department =
  [
   {'id':1 ,"name":"Angular"},
   {'id':2 ,"name":"React"},

   {'id':3 ,"name":"node"},
   {'id':4 ,"name":"PHP"},
   {'id':5 ,"name":"Java"}
  ]

  
 
 checkHielight(depart){
 	return  depart.id === this.selectedId;
 }

 onSelect(depart){
  	// it take 2 params first the path the second the id
   this._route.navigate(['department-details/',depart.id]);
  }
}
