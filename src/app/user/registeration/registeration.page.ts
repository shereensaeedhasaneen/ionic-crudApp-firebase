import { Router } from '@angular/router';
import { AuthenticationService } from './../../show-employee/service/authentication.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registeration',
  templateUrl: './registeration.page.html',
  styleUrls: ['./registeration.page.scss'],
})
export class RegisterationPage implements OnInit {

  constructor(private authService:AuthenticationService,
    private router:Router) { }

  ngOnInit() {
  }

  signUp(email:any,password:any){
    this.authService.Register(email,password)
    .then(res=>{
      console.log(res)
    })
    .catch(err=>{
      window.alert(err.message)
    })
  }
}

