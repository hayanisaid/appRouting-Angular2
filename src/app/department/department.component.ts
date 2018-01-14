import { Component, OnInit } from '@angular/core';
import {Router}  from '@angular/router';

@Component({
  selector: 'app-department',
  template:`
     <h3>Department List</h3>
     <ul (click)="onSelect(depart)" *ngFor="let depart of department">
     <li>{{depart.name}}</li>
     </ul>
 
  `,
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit() {
  }

  department =
  [
   {'id':1 ,"name":"Angular"},
   {'id':2 ,"name":"React"},

   {'id':3 ,"name":"node"},
   {'id':4 ,"name":"PHP"},
   {'id':5 ,"name":"Java"}
  ]

  onSelect(depart){
  	// it take 2 params first the path the second the id
   this.route.navigate(['department-details/',depart.id]);
  }
 
}
