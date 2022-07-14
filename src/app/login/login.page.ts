import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';



@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage  {

  group: FormGroup;
  ngOnInit(){
    this.group = new FormGroup({
      UserName : new FormControl('',[Validators.required, Validators.email]),
      Password : new FormControl('',[Validators.required, Validators.minLength(6)])
    })
  }


}
