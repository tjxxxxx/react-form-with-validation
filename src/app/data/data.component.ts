import { Component, OnInit } from '@angular/core';
import {HttpClient,HttpParams,HttpHeaders} from '@angular/common/http'
import { Observable } from 'rxjs';
import {tap} from 'rxjs/operators';
interface User{
  userId:number
  id:number
  title:string
  body:string
}
@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {
  
  users: Observable<User[]>;
  req: Observable<User[]>;


  constructor(private http:HttpClient) { }

  ngOnInit() {
    this.users=this.http.get<User[]>(
      "https://jsonplaceholder.typicode.com/posts"
    ).pipe(tap(console.log));
    
    // this.http.post("https://jsonplaceholder.typicode.com/posts",{
    //    "name":"test",
    //    "eamil":"test",

    // }).subscribe(
    //   data=>{
    //     console.log("post successful",data)
    //   },
    //   error=>{
    //     console.log("Error",error);
    //   }
    // )
    
   }
   
}
