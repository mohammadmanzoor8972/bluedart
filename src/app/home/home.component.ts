import { Component, OnInit } from '@angular/core';
import { debug } from 'util';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  private isHeader:boolean = true;
  constructor(private router: Router) { } 

  ngOnInit() {
    
  
  }
  isActive = "vendor";
         
  changeDashboard(param){
    let selected=param;    
    switch(selected){
      case "vendor":{
        this.router.navigate(['./vendor']);
        this.isActive = "vendor";
        break;
      }
      case "routes":{
        this.router.navigate(['./routes']);
        this.isActive = "routes";
        break;
      }
      case "vehicles":{
        this.router.navigate(['./vehicles']);
        this.isActive = "vehicles";        
        break;
      }
      case "whatifAnalysis":{
        this.router.navigate(['./whatifAnalysis']);
        this.isActive = "whatifAnalysis";
        break;
      }
      
    };    
  }  
}
