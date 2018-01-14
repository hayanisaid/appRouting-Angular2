import { Component, OnInit } from '@angular/core';

import {ActivatedRoute} from '@angular/router';

@Component({
   
    template:`
       <div class="container">
       <h3>Departement Details</h3>
       <p> you navigated to Department detail id={{departId}}</p>
       </div>
    `
  
})
export class DepartmentDetailsComponent implements OnInit {
    
  public departId;
  constructor(private _route:ActivatedRoute) { }

  ngOnInit() {
  	/* get the id param from the url*/
  	let id=this._route.snapshot.params['id'];
  	this.departId=id;
  }



}
