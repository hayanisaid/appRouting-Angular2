import { Component, OnInit } from '@angular/core';

import {ActivatedRoute,Router,Params} from '@angular/router';

@Component({
   
    template:`
       <div class="container">
       <h3>Departement Details</h3>
       <p> you navigated to Department detail id={{departId}}</p>
       <a (click)="goPrev()">Prev</a>
       <a (click)="goNext()">Next</a>
       <button (click)="goBack()" >Back</button>
       </div>
    `
  
})
export class DepartmentDetailsComponent implements OnInit {
    
  public departId;
  constructor(private _route:ActivatedRoute,private _router:Router) { }

 /* ngOnInit() {
  	// get the id param from the url
  	// let id=this._route.snapshot.params['id'];
  	get number id using parsInt
  	let id=parseInt(this._route.snapshot.params['id']) ;
  	this.departId=id;
  }*/

/*usign param aprouche to work with prev and next method*/
  ngOnInit(){
  	this._route.params.subscribe((param:Params)=>{
  		let id =parseInt(param['id']);
  		this.departId=id;
  	})
  }

 goPrev(){
 	let prevId= this.departId -1;
 	this._router.navigate(['department-details/',prevId]);
 }
 goNext(){
 	let nextId=this.departId + 1;
 	this._router.navigate(['department-details',nextId]);
 }

 /*back to the origin list*/
 goBack(){
 	let selectedId=this.departId?this.departId:null;
 	this._router.navigate(['department/',{id:selectedId}]);
 }
}
