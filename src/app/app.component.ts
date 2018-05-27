import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  private isHeader:boolean = false;
  constructor(private router:Router){
    var that = this;
    router.events.subscribe((val:any) => {
    if(val.url=="/login"){
      that.isHeader = false;
    } else {
      that.isHeader = true;
    }
    });
  }
  
  ngAfterViewInit(){
  //  alert("hi")
  }
}
