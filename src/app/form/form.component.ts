import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormControl,FormGroup,Validators, AbstractControl} from '@angular/forms';
import {HttpClient} from '@angular/common/http'
import { findReadVarNames } from '@angular/compiler/src/output/output_ast';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  
  rightMessage: string
  errorMessage: string
  profileForm: FormGroup
  router: any;
  constructor( public fb:FormBuilder,private http:HttpClient) {
 
   }
  ngOnInit() {
    this.profileForm=this.fb.group({
      fname:new FormControl('',[Validators.required,Validators.pattern("^[a-zA-Z]{3,}")]),
      lname:['',[Validators.required,Validators.minLength(2),Validators.pattern("^[a-zA-Z]+")]],
      number:['',[Validators.required,Validators.maxLength(11),Validators.minLength(11),Validators.pattern("^021[0-9]+")]],
      mail:['',[Validators.required,Validators.pattern("^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$")]],
      message:['',[Validators.required,Validators.minLength(5)]],
      age:['',Validators.required],
      
  });
  

}
  
   onSubmit(){
     //console.log(this.profileForm)

     if (!this.profileForm.valid || !this.profileForm.dirty ){
      this.rightMessage="" 
      this.errorMessage = 'wrong message，please see the mention'
     }
    
     else{
       //console.log(this.profileForm.value)
       this.errorMessage = ''
       this.rightMessage="submit successfully"

     }
     this.http.post("https://jsonplaceholder.typicode.com/posts",
    //  {
       
    //    'lname':JSON.stringify(this.profileForm.get('lname').value),
    //    'number':JSON.stringify(this.profileForm.get('number').value),
    //    'fname':JSON.stringify(this.profileForm.get('fname').value),
    // }
       this.profileForm.value
  ).subscribe(
      data=>{
        console.log("post successful",data)
      },
      error=>{
        console.log("Error",error);
      }
    )
     
   }
  cancel(){
    this.profileForm.reset();

  }
 
  minDate=new Date(2000,0,1)
  maxDate=new Date(2020,0,1)
  
}
// function ageValidator(c: AbstractControl):{
//   [key:string]:any
// } | null {
//   let age=c.value;
//   if(age && (isNaN(age) || age<20 || age >120)){
//     return {'range':true, min:20, max:120};
//   }
//   return null;
// }
