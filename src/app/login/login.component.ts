import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

constructor(private router: Router) { }  	
  username: string='';
  password: string='';

  redirect() {
  	if(this.username=="admin" && this.password=="admin"){
  		this.router.navigate(['./vendor']);
  	}
    
  }
  ngOnInit() {
  }
  
}
