import { Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/finally';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';

import { Http,Response ,Headers} from '@angular/http';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { ServiceService } from '../service.service';
@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {

  private userData:any=[]; 
  constructor(private _service:ServiceService) { }

  ngOnInit() {

    this._service.getData()
    .map(res => res)
    .finally(() => { })
    .subscribe(res => {console.log(res);
         this.userData=res; 

    });
  }

}
