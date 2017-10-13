import { Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/finally';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';

import { Http,Response ,Headers} from '@angular/http';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { ServiceService } from '../service.service';
@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  constructor(private route: ActivatedRoute,
    private _service:ServiceService) { }

    private usersTodolist:any=[];
    private disabledStatus:boolean =false;

    private UserIDSel:any;
    private todoIDSel:any;

  ngOnInit() {

    this.route.paramMap
    .subscribe(params => {
      let id = params.get('id'); // This line converts id from string into num
    
      this._service.getTodoList(id)
      .map(res => res)
      .finally(() => { })
      .subscribe(res => {console.log(res);
           this.usersTodolist=res;
      });

          

    });
  }

public updateTodo(){
  
  this._service.updateTodoList(this.todoIDSel)
  .map(res => res)
  .finally(() => { })
  .subscribe(res => {console.log(res);
       console.log(res);
  });

  
}
public deleteTodo(){
  
  this._service.deleteTodoList(this.todoIDSel)
  .map(res => res)
  .finally(() => { })
  .subscribe(res => {console.log(res);
       console.log(res);
  });

  
}

  public changeCheck(todoId:number){
  //  console.log(todoId);
    
    this.todoIDSel=todoId;
    this.disabledStatus=true;

  }

}
